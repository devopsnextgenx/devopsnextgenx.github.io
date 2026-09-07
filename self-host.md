# Self-Hosting Environment
Domain Registrar: `https://dash.domain.digitalplat.org/domains`
DNS & Edge Network: Cloudflare
Ingress Tunnel: `cloudflared`

Domain: `devopsnextgenx.dpdns.org`

### Nameservers:
- `annabel.ns.cloudflare.com`
- `clayton.ns.cloudflare.com`

### Install
- Install `cloudflared`
  ```bash
  curl -L --output cloudflared.deb https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
  sudo dpkg -i cloudflared.deb 
  ```
- Login to `cloudflared`, to allow generating cert
  `cloudflared tunnel login`
- This will write: `/home/admn/.cloudflared/cert.pem`
- Create website tunnel: `cloudflared tunnel create home-website`
  ```bash
  sudo mkdir -p /etc/cloudflared
  sudo vi /etc/cloudflared/config.yml
  sudo cp ~/.cloudflared/config.yml /etc/cloudflared/config.yml
  sudo cp ~/.cloudflared/*.json /etc/cloudflared/
  ```

### Enable Service
- Write routes
  ```bash
  cloudflared tunnel route dns home-website media-indexer.devopsnextgenx.dpdns.org
  cloudflared tunnel route dns home-website mcp.devopsnextgenx.dpdns.org
  cloudflared tunnel route dns home-website cmd-mcp-server.devopsnextgenx.dpdns.org
  cloudflared tunnel route dns home-website pixtor.devopsnextgenx.dpdns.org
  cloudflared tunnel route dns home-website stories.devopsnextgenx.dpdns.org
  ```
- Write `config.yml`
  ```yml
  tunnel: <YOUR-TUNNEL-ID>
  credentials-file: /etc/cloudflared/<YOUR-TUNNEL-ID>.json

  ingress:
    - hostname: devopsnextgenx.dpdns.org
      service: http://localhost:8080   # Change 8080 to your local web app port
    # Pixtor
    - hostname: pixtor.devopsnextgenx.dpdns.org
      path: ^/api(/.*)?$
      service: http://localhost:3000
    - hostname: pixtor.devopsnextgenx.dpdns.org
      service: http://localhost:3001
    # Storysite
    - hostname: stories.devopsnextgenx.dpdns.org
      service: http://localhost:5000
    # media-indexer
    - hostname: media-indexer.devopsnextgenx.dpdns.org
      service: http://localhost:2345
    # cmd-mcp-server
    - hostname: mcp.devopsnextgenx.dpdns.org
      service: http://localhost:5432
    - hostname: cmd-mcp-server.devopsnextgenx.dpdns.org
      service: http://localhost:5433
    - service: http://localhost:8080
  ```