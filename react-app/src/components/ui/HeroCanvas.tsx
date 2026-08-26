import { useEffect, useRef } from 'react';

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    type Node = { x: number; y: number; vx: number; vy: number; r: number; hub: boolean };
    type Pulse = { link: [number, number]; t: number };

    let nodes: Node[] = [];
    let links: [number, number][] = [];
    let pulses: Pulse[] = [];
    let w = 0, h = 0, dpr = 1;
    let raf: number | null = null;
    let visible = true;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width; h = rect.height;
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function build() {
      const density = Math.max(16, Math.min(46, Math.round((w * h) / 26000)));
      nodes = [];
      for (let i = 0; i < density; i++) {
        nodes.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.09, vy: (Math.random() - 0.5) * 0.09,
          r: Math.random() * 1.5 + 0.9,
          hub: Math.random() < 0.16,
        });
      }
      pulses = [];
    }

    function step() {
      if (!visible) { raf = null; return; }
      ctx!.clearRect(0, 0, w, h);
      const maxDist = Math.min(210, Math.max(120, w / 7));
      links = [];

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < -20) n.x = w + 20; if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20; if (n.y > h + 20) n.y = -20;
      }

      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const dx = nodes[a].x - nodes[b].x, dy = nodes[a].y - nodes[b].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            const o = (1 - d / maxDist) * 0.34;
            ctx!.strokeStyle = `rgba(142, 210, 213, ${o.toFixed(3)})`;
            ctx!.lineWidth = 0.65;
            ctx!.beginPath();
            ctx!.moveTo(nodes[a].x, nodes[a].y);
            ctx!.lineTo(nodes[b].x, nodes[b].y);
            ctx!.stroke();
            links.push([a, b]);
          }
        }
      }

      for (const p of nodes) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.hub ? p.r * 1.9 : p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.hub ? 'rgba(232, 123, 60, .78)' : 'rgba(196, 224, 232, .5)';
        ctx!.fill();
        if (p.hub) {
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.r * 5.2, 0, Math.PI * 2);
          ctx!.strokeStyle = 'rgba(232, 123, 60, .17)';
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }
      }

      if (links.length && pulses.length < 4 && Math.random() < 0.022) {
        pulses.push({ link: links[Math.floor(Math.random() * links.length)], t: 0 });
      }
      for (let k = pulses.length - 1; k >= 0; k--) {
        const pu = pulses[k];
        pu.t += 0.011;
        if (pu.t >= 1) { pulses.splice(k, 1); continue; }
        const A = nodes[pu.link[0]], B = nodes[pu.link[1]];
        if (!A || !B) { pulses.splice(k, 1); continue; }
        const px = A.x + (B.x - A.x) * pu.t, py = A.y + (B.y - A.y) * pu.t;
        const fade = Math.sin(pu.t * Math.PI);
        ctx!.beginPath();
        ctx!.arc(px, py, 2.4, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 214, 179, ${(fade * 0.9).toFixed(3)})`;
        ctx!.fill();
      }

      raf = window.requestAnimationFrame(step);
    }

    function start() { if (!raf) { visible = true; raf = window.requestAnimationFrame(step); } }
    function stop() { visible = false; if (raf) { cancelAnimationFrame(raf); raf = null; } }

    resize();
    start();

    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => { clearTimeout(rt); rt = setTimeout(resize, 180); };
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', () => { document.hidden ? stop() : start(); });

    let io: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries[0].isIntersecting ? start() : stop();
      }, { threshold: 0 });
      io.observe(canvas);
    }

    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      io?.disconnect();
      clearTimeout(rt);
    };
  }, []);

  return <canvas className="hero-canvas" ref={canvasRef} aria-hidden={true} />;
}
