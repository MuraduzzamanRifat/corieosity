<?php
// Corieosity contact handler for shared/PHP hosting (HostGator).
// The static site posts JSON here; this emails the lead and (optionally)
// forwards it to the AIOS CRM once that's hosted.

header('Content-Type: application/json');

// ─── CONFIG ─────────────────────────────────────────────
$to               = 'hello@corieosity.com';  // <-- change to your real inbox
$aios_webhook_url = '';                       // optional: https://<aios-host>/api/leads
$aios_secret      = '';                       // optional: must match AIOS_WEBHOOK_SECRET
// ────────────────────────────────────────────────────────

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) { $data = $_POST; }

$email = isset($data['email']) ? trim($data['email']) : '';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'invalid email']);
  exit;
}

$name    = isset($data['name'])    ? trim($data['name'])    : '';
$company = isset($data['company']) ? trim($data['company']) : '';
$website = isset($data['website']) ? trim($data['website']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

$subject = 'New lead: ' . ($name !== '' ? $name : $email);
$body    = "Name: $name\nEmail: $email\nCompany: $company\nWebsite: $website\n\nMessage:\n$message\n";
$host    = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost';
$headers = "From: website@$host\r\nReply-To: $email\r\n";

@mail($to, $subject, $body, $headers);

// Optional: forward to the AIOS CRM when it's live.
if ($aios_webhook_url !== '' && function_exists('curl_init')) {
  $ch = curl_init($aios_webhook_url);
  curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 4,
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json', 'x-aios-secret: ' . $aios_secret],
    CURLOPT_POSTFIELDS     => json_encode([
      'name' => $name, 'email' => $email, 'company' => $company,
      'website' => $website, 'message' => $message, 'source' => 'website',
    ]),
  ]);
  @curl_exec($ch);
  @curl_close($ch);
}

echo json_encode(['ok' => true]);
