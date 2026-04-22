from http.server import BaseHTTPRequestHandler


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(b"""
<!DOCTYPE html>
<html>
<body style="font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#0a0a0a;color:#fff;">
  <h1>Ethan's Epic Website </h1>
</body>
</html>
""")
