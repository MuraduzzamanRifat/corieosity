<?php
header('Content-Type: application/json');

// ── CONFIG ──────────────────────────────────────────────
$to = 'hello@corieosity.com';   // <-- change to your real inbox
$aios_webhook_url = '';          // optional: your AIOS /api/leads URL
$aios_secret = '';               // optional: matches AIOS_WEBHOOK_SECRET
// ────────────────────────────────────────────────────────

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data) { $data = $_POST; }

$email = isset($data['email']) ? trim($data['email']) : '';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'invalid email']);
  exit;
}

$name    = isset($data['name']) ? $data['name'] : '';
$company = isset($data['company']) ? $data['company'] : '';
$website = isset($data['website']) ? $data['website'] : '';
$message = isset($data['message']) ? $data['message'] : '';

$subject = 'New lead: ' . ($name ?: $email);
$body    = "Name: $name\nEmail: $email\nCompany: $company\nWebsite: $website\n\nMessage:\n$message\n";
$headers = "From: website@" . ($_SERVER['HTTP_HOST'] ?? 'localhost') . "\r\nReply-To: $email\r\n";
@mail($to, $subject, $body, $headers);

// Optional: forward the lead to the AIOS CRM once it's hosted.
if ($aios_webhook_url) {
  $ch = curl_init($aios_webhook_url);
  curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 4,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'x-aios-secret: ' . $aios_secret],
    CURLOPT_POSTFIELDS => json_encode([
      'name' => $name, 'email' => $email, 'company' => $company,
      'website' => $website, 'message' => $message, 'source' => 'website',
    ]),
  ]);
  @curl_exec($ch);
  @curl_close($ch);
}

echo json_encode(['ok' => true]);
