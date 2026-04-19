import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import "./HomePage.css";

const NAV_ITEMS = [
  { label: "Problem", id: "problem-section" },
  { label: "Solution", id: "solution-section" },
  { label: "Demo", id: "demo-section" },
  { label: "Impact", id: "impact-section" },
];

const TICKER_ITEMS = [
  "DPDP Act 2023",
  "EU AI Act 2026",
  "OWASP LLM Top 10",
  "Gemini Powered",
  "Zero Code Changes",
  "500+ Prompt Pairs",
  "Hindi · Tamil · Bengali",
  "SDG 10 Aligned",
  "Under 4 Minutes",
];

export default function HomePage() {
  const [activeNav, setActiveNav] = useState("problem-section");
  const tickerItems = useMemo(() => [...TICKER_ITEMS, ...TICKER_ITEMS], []);

  useEffect(() => {
    const cleanups = [];

    const heroCanvas = document.getElementById("hero-canvas");
    if (heroCanvas) {
      const renderer = new THREE.WebGLRenderer({ canvas: heroCanvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x06030f, 1);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
      camera.position.z = 5;

      const resize = () => {
        const w = heroCanvas.clientWidth;
        const h = heroCanvas.clientHeight || window.innerHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };

      resize();
      window.addEventListener("resize", resize);

      scene.fog = new THREE.FogExp2(0x06030f, 0.05);

      const nodeCount = 120;
      const nodeGeo = new THREE.SphereGeometry(0.04, 8, 8);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0x7f77dd });
      const nodes = [];
      const nodePositions = [];

      for (let i = 0; i < nodeCount; i += 1) {
        const m = new THREE.Mesh(nodeGeo, nodeMat.clone());
        const phi = Math.acos(-1 + (2 * i) / nodeCount);
        const theta = Math.sqrt(nodeCount * Math.PI) * phi;
        const r = 2.8 + Math.random() * 0.8;

        m.position.set(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        );

        m.userData = {
          ox: m.position.x,
          oy: m.position.y,
          oz: m.position.z,
          speed: 0.3 + Math.random() * 0.5,
          phase: Math.random() * Math.PI * 2,
          amp: 0.05 + Math.random() * 0.15,
        };

        nodePositions.push(m.position.clone());
        scene.add(m);
        nodes.push(m);
      }

      const edgeGeo = new THREE.BufferGeometry();
      const edgePositionsArr = [];
      for (let i = 0; i < nodeCount; i += 1) {
        for (let j = i + 1; j < nodeCount; j += 1) {
          if (nodePositions[i].distanceTo(nodePositions[j]) < 1.3) {
            edgePositionsArr.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);
            edgePositionsArr.push(nodePositions[j].x, nodePositions[j].y, nodePositions[j].z);
          }
        }
      }
      const edgeBuf = new Float32Array(edgePositionsArr);
      edgeGeo.setAttribute("position", new THREE.BufferAttribute(edgeBuf, 3));
      const edgeMat = new THREE.LineBasicMaterial({ color: 0x534ab7, transparent: true, opacity: 0.18 });
      const edgeSegments = new THREE.LineSegments(edgeGeo, edgeMat);
      scene.add(edgeSegments);

      const coreGeo = new THREE.SphereGeometry(0.55, 64, 64);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0x534ab7,
        transparent: true,
        opacity: 0.35,
        wireframe: false,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      scene.add(core);

      const shellGeo = new THREE.IcosahedronGeometry(0.72, 2);
      const shellMat = new THREE.MeshBasicMaterial({
        color: 0x7f77dd,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      });
      const shell = new THREE.Mesh(shellGeo, shellMat);
      scene.add(shell);

      const ringGeo = new THREE.TorusGeometry(1.4, 0.008, 8, 120);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xafa9ec, transparent: true, opacity: 0.25 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      scene.add(ring);

      const ring2Geo = new THREE.TorusGeometry(1.9, 0.005, 8, 120);
      const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xd4537e, transparent: true, opacity: 0.15 });
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.x = Math.PI / 3;
      ring2.rotation.y = Math.PI / 5;
      scene.add(ring2);

      const pCount = 600;
      const pGeo = new THREE.BufferGeometry();
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i += 1) {
        pPos[i * 3] = (Math.random() - 0.5) * 14;
        pPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
        pPos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      }
      pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({ color: 0x7f77dd, size: 0.025, transparent: true, opacity: 0.6 });
      const pMesh = new THREE.Points(pGeo, pMat);
      scene.add(pMesh);

      let mx = 0;
      let my = 0;
      const onMouseMove = (e) => {
        mx = ((e.clientX / window.innerWidth) - 0.5) * 2;
        my = -((e.clientY / window.innerHeight) - 0.5) * 2;
      };
      document.addEventListener("mousemove", onMouseMove);

      let t = 0;
      let heroRaf = 0;
      const animateHero = () => {
        heroRaf = window.requestAnimationFrame(animateHero);
        t += 0.008;

        core.rotation.y = t * 0.4;
        core.rotation.x = t * 0.2;
        shell.rotation.y = -t * 0.3;
        shell.rotation.z = t * 0.1;
        ring.rotation.z = t * 0.2;
        ring2.rotation.y = t * 0.15;
        ring2.rotation.x = t * 0.1;

        nodes.forEach((node) => {
          const u = node.userData;
          node.position.x = u.ox + Math.sin(t * u.speed + u.phase) * u.amp;
          node.position.y = u.oy + Math.cos(t * u.speed + u.phase * 0.7) * u.amp;
        });

        pMesh.rotation.y = t * 0.04;

        camera.position.x += (mx * 0.6 - camera.position.x) * 0.04;
        camera.position.y += (my * 0.4 - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };
      animateHero();

      cleanups.push(() => {
        window.cancelAnimationFrame(heroRaf);
        window.removeEventListener("resize", resize);
        document.removeEventListener("mousemove", onMouseMove);
        nodeGeo.dispose();
        nodeMat.dispose();
        nodes.forEach((node) => {
          if (node.material && typeof node.material.dispose === "function") {
            node.material.dispose();
          }
        });
        edgeGeo.dispose();
        edgeMat.dispose();
        coreGeo.dispose();
        coreMat.dispose();
        shellGeo.dispose();
        shellMat.dispose();
        ringGeo.dispose();
        ringMat.dispose();
        ring2Geo.dispose();
        ring2Mat.dispose();
        pGeo.dispose();
        pMat.dispose();
        renderer.dispose();
      });
    }

    const scene2Canvas = document.getElementById("scene2-canvas");
    if (scene2Canvas) {
      const renderer = new THREE.WebGLRenderer({ canvas: scene2Canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x06030f, 1);

      const w = scene2Canvas.clientWidth || 800;
      const h = 500;
      renderer.setSize(w, h, false);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(70, w / h, 0.1, 100);
      camera.position.z = 6;

      const count = 2000;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      const vel = new Float32Array(count * 3);

      for (let i = 0; i < count; i += 1) {
        pos[i * 3] = (Math.random() - 0.5) * 18;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 6;

        vel[i * 3] = (Math.random() - 0.5) * 0.003;
        vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
        vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;

        const r = Math.random();
        if (r < 0.5) {
          col[i * 3] = 0.498;
          col[i * 3 + 1] = 0.467;
          col[i * 3 + 2] = 0.867;
        } else if (r < 0.75) {
          col[i * 3] = 0.831;
          col[i * 3 + 1] = 0.325;
          col[i * 3 + 2] = 0.494;
        } else {
          col[i * 3] = 0.937;
          col[i * 3 + 1] = 0.624;
          col[i * 3 + 2] = 0.153;
        }
      }

      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));

      const mat = new THREE.PointsMaterial({ vertexColors: true, size: 0.035, transparent: true, opacity: 0.7 });
      const pts = new THREE.Points(geo, mat);
      scene.add(pts);

      let t2 = 0;
      let scene2Raf = 0;
      const animateScene2 = () => {
        scene2Raf = window.requestAnimationFrame(animateScene2);
        t2 += 0.005;

        const p = geo.attributes.position.array;
        for (let i = 0; i < count; i += 1) {
          p[i * 3] += vel[i * 3] + Math.sin(t2 + i * 0.05) * 0.001;
          p[i * 3 + 1] += vel[i * 3 + 1] + Math.cos(t2 + i * 0.07) * 0.001;

          if (p[i * 3] > 9) p[i * 3] = -9;
          if (p[i * 3] < -9) p[i * 3] = 9;
          if (p[i * 3 + 1] > 4) p[i * 3 + 1] = -4;
          if (p[i * 3 + 1] < -4) p[i * 3 + 1] = 4;
        }

        geo.attributes.position.needsUpdate = true;
        pts.rotation.z = Math.sin(t2 * 0.3) * 0.05;
        renderer.render(scene, camera);
      };
      animateScene2();

      cleanups.push(() => {
        window.cancelAnimationFrame(scene2Raf);
        geo.dispose();
        mat.dispose();
        renderer.dispose();
      });
    }

    const ctaCanvas = document.getElementById("cta-canvas");
    if (ctaCanvas) {
      const renderer = new THREE.WebGLRenderer({ canvas: ctaCanvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      const w = ctaCanvas.clientWidth || 800;
      const h = ctaCanvas.clientHeight || 500;
      renderer.setSize(w, h, false);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
      camera.position.z = 5;

      const torusGeometries = [];
      const torusMaterials = [];

      for (let i = 0; i < 12; i += 1) {
        const r = 0.4 + i * 0.3;
        const g = new THREE.TorusGeometry(r, 0.003 + i * 0.001, 8, 120);
        const m = new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x7f77dd : 0xd4537e,
          transparent: true,
          opacity: 0.15 - i * 0.008,
        });
        const mesh = new THREE.Mesh(g, m);
        mesh.userData = { speed: (0.5 + i * 0.08) * (i % 2 ? 1 : -1), tilt: i * 0.12 };
        scene.add(mesh);
        torusGeometries.push(g);
        torusMaterials.push(m);
      }

      const pN = 800;
      const pG = new THREE.BufferGeometry();
      const pA = new Float32Array(pN * 3);
      for (let i = 0; i < pN; i += 1) {
        pA[i * 3] = (Math.random() - 0.5) * 12;
        pA[i * 3 + 1] = (Math.random() - 0.5) * 8;
        pA[i * 3 + 2] = (Math.random() - 0.5) * 6;
      }
      pG.setAttribute("position", new THREE.BufferAttribute(pA, 3));
      const pM = new THREE.PointsMaterial({ color: 0x7f77dd, size: 0.02, transparent: true, opacity: 0.4 });
      const points = new THREE.Points(pG, pM);
      scene.add(points);

      let t3 = 0;
      let ctaRaf = 0;
      const animateCta = () => {
        ctaRaf = window.requestAnimationFrame(animateCta);
        t3 += 0.008;

        scene.children.forEach((child) => {
          if (child.userData && child.userData.speed) {
            child.rotation.z += child.userData.speed * 0.01;
            child.rotation.x = Math.sin(t3 * 0.3) * child.userData.tilt;
          }
        });

        renderer.render(scene, camera);
      };
      animateCta();

      cleanups.push(() => {
        window.cancelAnimationFrame(ctaRaf);
        torusGeometries.forEach((geometry) => geometry.dispose());
        torusMaterials.forEach((material) => material.dispose());
        pG.dispose();
        pM.dispose();
        renderer.dispose();
      });
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("vis");
            }, i * 60);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    NAV_ITEMS.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        sectionObserver.observe(section);
      }
    });

    const barTimer = window.setTimeout(() => {
      const b1 = document.getElementById("b1");
      const b2 = document.getElementById("b2");
      if (b1) b1.style.width = "74%";
      if (b2) b2.style.width = "18%";
    }, 1600);

    cleanups.push(() => {
      io.disconnect();
      sectionObserver.disconnect();
      window.clearTimeout(barTimer);
    });

    return () => {
      cleanups.forEach((dispose) => dispose());
    };
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveNav(sectionId);
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    const offset = 92;
    const targetTop = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  return (
    <div className="page">
      <nav className="nav">
        <div className="nlogo">SamataAI</div>
        <div className="npills">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={activeNav === item.id ? "np a" : "np"}
              onClick={() => handleNavClick(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
        <button className="nbtn" type="button">Request Audit</button>
      </nav>

      <div className="hero-wrap" style={{ position: "relative", overflow: "hidden" }}>
        <canvas id="hero-canvas" />
        <div className="hero-overlay">
          <div className="scroll-hint" style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)" }}>
            <span>Scroll</span><div className="scroll-line" />
          </div>
        </div>
      </div>

      <div className="ticker-outer">
        <div className="ticker-inner" id="tkr">
          {tickerItems.map((item, index) => (
            <span className="ti" key={`${item}-${index}`}><em>⬡</em>{item}</span>
          ))}
        </div>
      </div>

      <div className="scene2-wrap" id="problem-section" style={{ position: "relative" }}>
        <canvas id="scene2-canvas" />
        <div className="scene2-text reveal" style={{ position: "absolute", top: "50%", left: "60px", transform: "translateY(-50%)", zIndex: 3, maxWidth: "400px" }}>
          <div className="chip"><div className="cd" />The Problem</div>
          <div className="st" style={{ fontSize: "clamp(24px,3.5vw,42px)" }}>Invisible bias.<br /><span className="hl">Automated at scale.</span></div>
          <p className="sd" style={{ fontSize: "15px" }}>AI learns from historical data. India&apos;s data carries decades of discrimination. That discrimination is now running on servers at scale — making real decisions about real people.</p>
        </div>
      </div>

      <div className="section reveal">
        <div className="chip"><div className="cd" />Attack Scenarios</div>
        <div className="st">Five domains.<br /><span className="hl">All broken.</span></div>
        <div className="bento">
          <div className="bc bc-a" style={{ background: "linear-gradient(145deg,rgba(83,74,183,.14),rgba(212,83,126,.07))" }}>
            <div className="bc-big">2×</div>
            <div className="bc-t">Loan approval disparity</div>
            <div className="bc-d2">Upper-caste applicants approved at double the rate of SC/ST applicants with identical financial profiles. The AI doesn&apos;t see people — it replays biased history.</div>
            <span className="sev sc">Critical</span>
          </div>
          <div className="bc bc-b">
            <div className="bc-t" style={{ fontFamily: "'Unbounded',sans-serif", fontSize: "17px", fontWeight: 700, letterSpacing: "-.4px" }}>Education AI pushes women away from STEM</div>
            <div className="bc-d2" style={{ marginTop: "10px" }}>Student counseling bots discourage female applicants from engineering programs based solely on gender markers. The gender gap gets automated into every interaction.</div>
            <span className="sev sh">High Severity</span>
          </div>
          <div className="bc bc-c">
            <div className="bc-t" style={{ fontFamily: "'Unbounded',sans-serif", fontSize: "17px", fontWeight: 700, letterSpacing: "-.4px" }}>Healthcare triage deprioritizes lower-income patients</div>
            <div className="bc-d2" style={{ marginTop: "10px" }}>Trained on urban hospital data, triage AI systematically deprioritizes patients from lower-income areas. Unequal healthcare access, now delivered at algorithmic speed.</div>
            <span className="sev sc">Critical</span>
          </div>
          <div className="bc bc-d"><div className="bc-t">HR screening</div><div className="bc-d2">Resume filters eliminate candidates based on college names correlated with caste — invisible to every recruiter who trusts the AI output.</div><span className="sev sh">High</span></div>
          <div className="bc bc-e"><div className="bc-t">Gov services</div><div className="bc-d2">Scheme eligibility AI denies benefits to religious minorities at disproportionate rates — exclusion by algorithm, at government scale.</div><span className="sev sh">High</span></div>
          <div className="bc bc-f" style={{ background: "rgba(239,159,39,.05)", borderColor: "rgba(239,159,39,.14)" }}><div className="bc-t" style={{ color: "#FAC775" }}>Legal exposure</div><div className="bc-d2">DPDP Act 2023. EU AI Act 2026. OWASP LLM Top 10. Real financial liability. No comprehensive audit tool exists yet.</div></div>
        </div>
      </div>

      <div id="solution-section" style={{ padding: "110px 60px", background: "rgba(127,119,221,.03)", borderTop: "1px solid rgba(127,119,221,.07)" }} className="reveal">
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div className="chip"><div className="cd" />How It Works</div>
          <div className="st">Six steps.<br /><span className="hl">Zero guesswork.</span></div>
          <div className="flow-grid">
            <div className="fc"><div className="fn">Step 01</div><div className="fring">🔗</div><div className="ft">Connect</div><div className="fd">Link to any deployed AI via API endpoint — zero code changes to the target system required.</div></div>
            <div className="fc"><div className="fn">Step 02</div><div className="fring">⚡</div><div className="ft">Probe</div><div className="fd">Gemini generates 500+ demographically varied prompt pairs across gender, caste, religion, income axes.</div></div>
            <div className="fc"><div className="fn">Step 03</div><div className="fring">📊</div><div className="ft">Analyze</div><div className="fd">Response pairs statistically compared for demographic-correlated divergence with real significance testing.</div></div>
            <div className="fc"><div className="fn">Step 04</div><div className="fring">🎯</div><div className="ft">Score</div><div className="fd">Each disparity classified by severity, affected group, and financial exposure quantified in rupees.</div></div>
            <div className="fc"><div className="fn">Step 05</div><div className="fring">📋</div><div className="ft">Report</div><div className="fd">Fairness Dashboard surfaces plain-language findings. PDF exportable aligned to DPDP Act 2023.</div></div>
            <div className="fc"><div className="fn">Step 06</div><div className="fring">✅</div><div className="ft">Fix & Verify</div><div className="fd">Remediation Engine generates prompt patches and auto-reruns the full probe to confirm resolution.</div></div>
          </div>
        </div>
      </div>

      <div className="section reveal">
        <div className="chip"><div className="cd" />Core Modules</div>
        <div className="st">Four engines.<br /><span className="hl">One mission.</span></div>
        <div className="mg">
          <div className="mc"><div className="mac" style={{ background: "radial-gradient(circle,#534AB7,transparent)" }} /><div className="mn">Module 01</div><div className="mt">Bias Probe Engine</div><div className="md">Gemini 1.5 Flash generates semantically equivalent prompts differing only in demographic signals. Fires 500+ pairs at any target across gender, caste, religion, income — in Hindi, Tamil, Bengali and more.</div><div className="mts"><span className="mtag">Gemini 1.5 Flash</span><span className="mtag">500+ pairs</span><span className="mtag">Multilingual</span></div></div>
          <div className="mc"><div className="mac" style={{ background: "radial-gradient(circle,#D4537E,transparent)" }} /><div className="mn">Module 02</div><div className="mt">Fairness Dashboard</div><div className="md">Translates raw statistics into actionable findings for compliance teams, not data scientists. Bias Risk Score 0–100, visual charts, flagged pairs side-by-side, exportable PDF for DPDP Act 2023.</div><div className="mts"><span className="mtag">Score 0–100</span><span className="mtag">Flutter</span><span className="mtag">DPDP Aligned</span></div></div>
          <div className="mc"><div className="mac" style={{ background: "radial-gradient(circle,#EF9F27,transparent)" }} /><div className="mn">Module 03</div><div className="mt">Financial Impact Scorer</div><div className="md">Every bias flag becomes a rupee-denominated exposure estimate. "This gender bias carries ₹18.4 Lakh DPDP Act exposure affecting 12,000 female users annually." Concrete. Immediate.</div><div className="mts"><span className="mtag">₹ Exposure</span><span className="mtag">DPDP Fines</span><span className="mtag">Reputational Risk</span></div></div>
          <div className="mc"><div className="mac" style={{ background: "radial-gradient(circle,#AFA9EC,transparent)" }} /><div className="mn">Module 04</div><div className="mt">Remediation Engine</div><div className="md">Generates corrective system prompt patches, auto-reruns the Bias Probe after applying changes, and tracks score improvement over time. 74/100 High → 18/100 Low. Confirmed.</div><div className="mts"><span className="mtag">Auto-retest</span><span className="mtag">Prompt Patches</span><span className="mtag">Tracking</span></div></div>
        </div>
      </div>

      <div id="demo-section" style={{ padding: "110px 60px", background: "rgba(83,74,183,.04)", borderTop: "1px solid rgba(127,119,221,.07)" }} className="reveal">
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div className="chip"><div className="cd" />Live Demo</div>
          <div className="st">Caught in<br /><span className="hl">3 minutes 47 seconds.</span></div>
          <div className="demo-wrap">
            <div className="term">
              <div className="tb"><div className="td_ tr" /><div className="td_ ty" /><div className="td_ tg" /><span className="tname">samataai-probe · student-loan-advisory</span></div>
              <div className="tbody">
                <div className="tl"><span className="cmd">›</span> Connecting to target API endpoint...</div>
                <div className="tl"><span className="ok">✓</span> Attack surface mapped. Model: GPT-4-turbo</div>
                <div className="tl"><span className="cmd">›</span> Generating <span className="v">100</span> prompt pairs (caste axis)...</div>
                <div className="tl"><span className="ok">✓</span> "Arjun Sharma, ₹5L" vs "Rajan Chamar, ₹5L"</div>
                <div className="tl"><span className="cmd">›</span> Firing probes. Collecting responses...</div>
                <div className="tl"><span className="w">⚠</span> Approval language: <span className="v">81%</span> upper-caste / <span className="er">43%</span> SC/ST</div>
                <div className="tl"><span className="er">✕</span> CASTE BIAS flagged — <span className="er">HIGH severity</span></div>
                <div className="tl"><span className="cmd">›</span> Running gender axis (100 pairs)...</div>
                <div className="tl"><span className="w">⚠</span> Female discouragement: <span className="v">67%</span> vs <span className="er">12%</span> male</div>
                <div className="tl"><span className="er">✕</span> GENDER BIAS flagged — <span className="er">HIGH severity</span></div>
                <div className="tl"><span className="cmd">›</span> Generating remediation patch...</div>
                <div className="tl"><span className="ok">✓</span> Patch applied. Re-running full probe set...</div>
                <div className="tl"><span className="ok">✓</span> <span className="w">74 HIGH</span> → <span className="ok">18 LOW</span>. Both flags resolved.</div>
                <div className="tl"><span className="ok">✓</span> Audit complete in 3m 47s <span className="blk" /></div>
              </div>
            </div>
            <div className="rcol">
              <div className="rc"><div className="rh"><span className="rl">Pre-remediation bias score</span><span className="rb rbh">High Risk</span></div><div className="btrack"><div className="bfill bfh" id="b1" style={{ width: "0%" }} /></div><div className="rf"><span>74 / 100</span><span>2 critical flags</span></div></div>
              <div className="rc"><div className="rh"><span className="rl">Post-remediation bias score</span><span className="rb rbl">Low Risk</span></div><div className="btrack"><div className="bfill bfl" id="b2" style={{ width: "0%" }} /></div><div className="rf"><span>18 / 100</span><span>0 flags</span></div></div>
              <div className="imp"><div className="in">₹74 Lakh</div><div className="it">DPDP Act exposure detected and eliminated in under 4 minutes. Zero ML expertise required.</div></div>
              <div className="rc"><div className="rh"><span className="rl">Audit duration</span><span className="rb rbl">Complete</span></div><div style={{ fontFamily: "'Unbounded',sans-serif", fontSize: "36px", fontWeight: 900, color: "#AFA9EC", marginTop: "8px" }}>3m 47s</div><div style={{ fontSize: "12px", color: "rgba(175,169,236,.35)", marginTop: "4px" }}>Connection → Remediation confirmed</div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section reveal" id="impact-section">
        <div className="chip"><div className="cd" />Impact</div>
        <div className="st">Built for the<br /><span className="hl">goals that matter.</span></div>
        <div className="sg">
          <div className="scard s1"><div className="sn">10</div><div className="stit">Reduced Inequalities</div><div className="sdesc">Primary SDG. Detects AI discrimination by caste, gender, religion, income — stops inequality from being automated at scale.</div></div>
          <div className="scard s2"><div className="sn">3</div><div className="stit">Good Health</div><div className="sdesc">Ensures healthcare AI doesn&apos;t deprioritize patients by socioeconomic or geographic origin.</div></div>
          <div className="scard s3"><div className="sn">5</div><div className="stit">Gender Equality</div><div className="sdesc">Tests gender disparities in career counseling, loan advisory, and HR AI systems across India.</div></div>
          <div className="scard s4"><div className="sn">16</div><div className="stit">Justice & Institutions</div><div className="sdesc">Supports transparent AI governance — verifiable fairness audits for regulators and organizations.</div></div>
        </div>
      </div>

      <div style={{ padding: "100px 60px", background: "rgba(127,119,221,.03)", borderTop: "1px solid rgba(127,119,221,.07)" }} className="reveal">
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div className="chip"><div className="cd" />Architecture</div>
          <div className="st">Google tech.<br /><span className="hl">Not a wrapper.</span></div>
          <div className="tg2">
            <div className="tcard"><div className="tico">🤖</div><div className="tn">Gemini 1.5 Flash</div><div className="tr2">Adversarial generation, classification, remediation via Vertex AI</div></div>
            <div className="tcard"><div className="tico">🔥</div><div className="tn">Firebase</div><div className="tr2">Firestore audit storage, Auth for multi-tenant access</div></div>
            <div className="tcard"><div className="tico">📱</div><div className="tn">Flutter</div><div className="tr2">Fairness Dashboard — web + mobile, audit wizard, PDF viewer</div></div>
            <div className="tcard"><div className="tico">☁</div><div className="tn">Cloud Run</div><div className="tr2">Serverless scanner engine — auto-scaling, pay-per-audit</div></div>
            <div className="tcard"><div className="tico">📊</div><div className="tn">BigQuery</div><div className="tr2">Aggregated bias trend analysis across audit sessions</div></div>
            <div className="tcard"><div className="tico">🐍</div><div className="tn">Python + FastAPI</div><div className="tr2">Core scanner engine, real significance testing pipeline</div></div>
            <div className="tcard"><div className="tico">📄</div><div className="tn">Cloud Functions</div><div className="tr2">DPDP Act & OWASP compliance PDF report generation</div></div>
            <div className="tcard"><div className="tico">🌐</div><div className="tn">Multilingual</div><div className="tr2">Hindi, Tamil, Bengali — where bias manifests most severely</div></div>
          </div>
        </div>
      </div>

      <div className="cta reveal">
        <canvas id="cta-canvas" />
        <div className="cta-inner">
          <div className="chip" style={{ display: "inline-flex" }}><div className="cd" />Get Started</div>
          <div className="cta-t">The security layer every<br /><span className="hl">AI product needs.</span></div>
          <p className="cta-s">Connect your deployed AI. Full bias audit in under 4 minutes. No ML expertise. No code changes.</p>
          <div className="cta-row" style={{ justifyContent: "center", opacity: 1, animation: "none" }}>
            <button className="btn-p" type="button">Request Early Access →</button>
            <button className="btn-g" type="button">View on GitHub</button>
          </div>
        </div>
      </div>

      <footer>
        <div className="flogo">SamataAI</div>
        <div className="fcopy">Team Strawhats · Solution Challenge 2026 · Confidential</div>
        <div className="flinks"><a href="#">SDG 10</a><a href="#">DPDP Act</a><a href="#">OWASP</a><a href="#">Privacy</a></div>
      </footer>
    </div>
  );
}
