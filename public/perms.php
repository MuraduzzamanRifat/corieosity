<?php
// One-time helper for HostGator. Windows-made zips can extract nested directories
// without the execute bit (0644), which makes them non-traversable → Apache 403s
// every asset inside (e.g. /next/static/...). This recursively sets 0755 on dirs
// and 0644 on files so everything serves. Visit it once, then DELETE this file.
header('Content-Type: text/plain');
$root = __DIR__;
@chmod($root, 0755);
$dirs = 0; $files = 0;
$it = new RecursiveIteratorIterator(
  new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS),
  RecursiveIteratorIterator::SELF_FIRST
);
foreach ($it as $p) {
  if ($p->isDir()) { @chmod($p->getPathname(), 0755); $dirs++; }
  else { @chmod($p->getPathname(), 0644); $files++; }
}
echo "Permissions fixed under:\n$root\n\n";
echo "Directories set to 0755: $dirs\n";
echo "Files set to 0644:       $files\n\n";
echo "Now DELETE perms.php from the server.\n";
