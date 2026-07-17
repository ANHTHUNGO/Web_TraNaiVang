# -*- coding: utf-8 -*-
"""Generate fresh, airy GREEN nature-style SVG artwork for Tra Nai Vang (placeholder)."""
import math, os
OUT = os.path.dirname(__file__)

def smooth_path(pts, w, h):
    d = f"M {pts[0][0]:.1f},{pts[0][1]:.1f} "
    n = len(pts)
    for i in range(n-1):
        p0 = pts[i-1] if i > 0 else pts[i]
        p1, p2 = pts[i], pts[i+1]
        p3 = pts[i+2] if i+2 < n else pts[i+1]
        c1x = p1[0] + (p2[0]-p0[0])/6; c1y = p1[1] + (p2[1]-p0[1])/6
        c2x = p2[0] - (p3[0]-p1[0])/6; c2y = p2[1] - (p3[1]-p1[1])/6
        d += f"C {c1x:.1f},{c1y:.1f} {c2x:.1f},{c2y:.1f} {p2[0]:.1f},{p2[1]:.1f} "
    d += f"L {w},{h} L 0,{h} Z"
    return d

def ridge(base, amp, freq, phase, w, n=14):
    pts = []
    for i in range(n+1):
        x = w*i/n
        y = base + amp*math.sin(freq*math.pi*i/n + phase) + amp*0.32*math.sin(2.3*freq*math.pi*i/n + phase*1.7)
        pts.append((x, y))
    return pts

def hero_scene():
    w, h = 1000, 1250
    # fresh green, airy, misty — hazy distant hills whiten with distance
    layers = [
        (330, 40, 1.3, 0.4, "url(#g1)", 0.7),
        (440, 56, 1.0, 2.1, "url(#g2)", 0.85),
        (585, 70, 1.4, 0.9, "url(#g3)", 1),
        (770, 96, 1.1, 3.2, "url(#g4)", 1),
        (980, 150, 0.9, 1.2, "url(#g5)", 1),
    ]
    s = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" preserveAspectRatio="xMidYMid slice">']
    s.append('''<defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#EDF3E6"/><stop offset="0.5" stop-color="#F3F6EC"/>
        <stop offset="0.8" stop-color="#EAF1DC"/><stop offset="1" stop-color="#DFE9CB"/>
      </linearGradient>
      <radialGradient id="sun" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#FFFFFF"/><stop offset="0.45" stop-color="#FBFBEE" stop-opacity="0.85"/>
        <stop offset="1" stop-color="#EAF0D8" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#CBD9BC"/><stop offset="1" stop-color="#BCCCA8"/></linearGradient>
      <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#AFC596"/><stop offset="1" stop-color="#9BB57F"/></linearGradient>
      <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8CAA68"/><stop offset="1" stop-color="#71934E"/></linearGradient>
      <linearGradient id="g4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5F8140"/><stop offset="1" stop-color="#4A6B2F"/></linearGradient>
      <linearGradient id="g5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3E5B27"/><stop offset="1" stop-color="#2E4A1D"/></linearGradient>
      <linearGradient id="rows" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#ffffff" stop-opacity="0"/><stop offset="0.5" stop-color="#ffffff" stop-opacity="0.16"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
      </linearGradient>
    </defs>''')
    s.append(f'<rect width="{w}" height="{h}" fill="url(#sky)"/>')
    s.append('<circle cx="640" cy="250" r="300" fill="url(#sun)"/>')
    s.append('<circle cx="640" cy="250" r="70" fill="#FFFFFF" opacity="0.8"/>')
    # birds
    for (bx,by,sc) in [(300,210,1),(352,238,0.7),(255,258,0.55)]:
        s.append(f'<path d="M{bx},{by} q{7*sc},{-6*sc} {14*sc},0 q{7*sc},{-6*sc} {14*sc},0" stroke="#5f7a48" stroke-width="{2.2*sc:.1f}" fill="none" stroke-linecap="round" opacity="0.4"/>')
    for i,(base,amp,freq,phase,fill,op) in enumerate(layers):
        pts = ridge(base,amp,freq,phase,w)
        s.append(f'<path d="{smooth_path(pts,w,h)}" fill="{fill}" opacity="{op}"/>')
        if i < 4:
            my = base + amp + 22
            s.append(f'<ellipse cx="500" cy="{my:.0f}" rx="640" ry="30" fill="#FFFFFF" opacity="0.55"/>')
            s.append(f'<ellipse cx="300" cy="{my+16:.0f}" rx="380" ry="18" fill="#FFFFFF" opacity="0.45"/>')
    # tea rows on foreground
    for k in range(8):
        yy = 1010 + k*40; curve = 44 + k*6
        s.append(f'<path d="M-20,{yy} Q500,{yy-curve} {w+20},{yy}" stroke="url(#rows)" stroke-width="{8+k}" fill="none"/>')
    s.append('</svg>')
    open(os.path.join(OUT,"hero-scene.svg"),"w",encoding="utf-8").write("\n".join(s))
    print("hero-scene.svg")

def canister(name, body_top, body_bot, accent, label_ink="#2f3a26", lid="#C9AE6A", lid2="#A98F45", premium_ink="#ffffff"):
    w,h = 640, 800
    s = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FBFCF7"/><stop offset="1" stop-color="#EFF2E7"/></linearGradient>
      <linearGradient id="bd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{body_top}"/><stop offset="1" stop-color="{body_bot}"/></linearGradient>
      <linearGradient id="sh" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffffff" stop-opacity="0.30"/><stop offset="0.5" stop-color="#ffffff" stop-opacity="0"/><stop offset="1" stop-color="#000000" stop-opacity="0.14"/></linearGradient>
      <linearGradient id="lid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="{lid}"/><stop offset="1" stop-color="{lid2}"/></linearGradient>
    </defs>
    <rect width="{w}" height="{h}" fill="url(#bg)"/>
    <ellipse cx="320" cy="722" rx="188" ry="28" fill="#20301a" opacity="0.10"/>
    <rect x="150" y="188" width="340" height="500" rx="30" fill="url(#bd)"/>
    <rect x="150" y="188" width="340" height="500" rx="30" fill="url(#sh)"/>
    <rect x="176" y="120" width="288" height="92" rx="20" fill="url(#lid)"/>
    <rect x="176" y="120" width="288" height="92" rx="20" fill="#000" opacity="0.04"/>
    <rect x="150" y="196" width="340" height="12" fill="#000" opacity="0.08"/>
    <rect x="150" y="404" width="340" height="150" fill="#FBFCF7" opacity="0.95"/>
    <rect x="150" y="404" width="340" height="150" fill="none" stroke="{accent}" stroke-width="2" opacity="0.4"/>
    <g transform="translate(320,360)">
      <polygon points="0,-46 40,-23 40,23 0,46 -40,23 -40,-23" fill="none" stroke="{accent}" stroke-width="4"/>
      <path d="M0,-6 C-14,-2 -16,14 0,26 C16,14 14,-2 0,-6 Z" fill="{accent}"/>
      <path d="M0,-6 C0,-16 -4,-22 -9,-26 M0,-6 C0,-16 4,-22 9,-26" stroke="{accent}" stroke-width="3" fill="none" stroke-linecap="round"/>
    </g>
    <text x="320" y="470" text-anchor="middle" font-family="Georgia, serif" font-size="30" fill="{label_ink}" letter-spacing="3">NAI VÀNG</text>
    <text x="320" y="505" text-anchor="middle" font-family="Georgia, serif" font-size="15" fill="{accent}" letter-spacing="4">SINCE 1982</text>
    <text x="320" y="600" text-anchor="middle" font-family="Georgia, serif" font-size="15" fill="{premium_ink}" opacity="0.9" letter-spacing="6">PREMIUM TEA</text>
  </svg>'''
    open(os.path.join(OUT,f"{name}.svg"),"w",encoding="utf-8").write(s)
    print(name+".svg")

hero_scene()
# fresh natural palette per product
canister("prod-samdua",  "#7E9B54", "#5C7C38", "#C9AE6A")                                   # sâm dứa - sage green
canister("prod-oolong",  "#EDE6D0", "#D6C9A4", "#A98F45", label_ink="#4a4128", premium_ink="#7a6a3a")  # oolong - ivory/premium
canister("prod-lai",     "#E7EEDA", "#CBD9B4", "#8FA96B", label_ink="#3d4a2c", premium_ink="#6f8f4e")  # lài - soft white-green
canister("prod-cagaileo","#46603A", "#2F4A22", "#C9AE6A")                                   # cà gai leo - deep forest
print("done")
