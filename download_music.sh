#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# download_music.sh – Descarga playlists o vídeos de YouTube como MP3
# Siempre usa cookies del navegador para evitar el mensaje “Sign in to confirm…”
# ---------------------------------------------------------------------------

set -euo pipefail

### ───────────────────────── Configuración rápida ───────────────────────── ###
URL="${1:-}"
[[ -z "$URL" ]] && { echo "❌ Falta la URL o Playlist_ID"; exit 1; }

BROWSER="firefox"               # Cambia a chrome / chromium / brave si lo prefieres
ARCHIVE_FILE="$HOME/.yt-dlp-archive.txt"
OUT_TPL="$HOME/Music/%(playlist_title)s/%(title)s.%(ext)s"

### ─────────────────────────── Comprobaciones ──────────────────────────── ###
command -v yt-dlp >/dev/null || { echo "❌ Falta yt-dlp"; exit 1; }
command -v ffmpeg  >/dev/null || { echo "❌ Falta ffmpeg";  exit 1; }

### ──────────────────────────── Opciones yt-dlp ────────────────────────── ###
yt-dlp \
  --cookies-from-browser "$BROWSER" \
  --ignore-errors \
  --extract-audio --audio-format mp3 --audio-quality 0 \
  --download-archive "$ARCHIVE_FILE" \
  --sleep-interval 0.2 --max-sleep-interval 3 \
  --limit-rate 1500K \
  --restrict-filenames \
  --output "$OUT_TPL" \
  --embed-metadata --embed-thumbnail \
  -f ba/bestaudio \
  "$URL"

echo "✅  Descarga completada"
