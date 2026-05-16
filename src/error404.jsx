import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto:wght@300;400;600&display=swap');
        .p404-scene {
          position: relative; width: 100vw; height: 100vh;
          display: flex; flex-direction: column; align-items: center;
          background: #0c0404; overflow: hidden;
          font-family: 'Roboto', sans-serif; color: #fff;
        }
        .p404-overlay {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background:
            radial-gradient(ellipse 80% 60% at 50% 44%, rgba(170,12,12,0.58) 0%, rgba(90,5,5,0.3) 55%, transparent 78%),
            linear-gradient(to bottom, rgba(15,0,0,0.75) 0%, transparent 30%, rgba(0,0,0,0.6) 100%);
        }
        .p404-sky { position: absolute; bottom: 0; left: 0; width: 100%; height: 65%; z-index: 1; }
        .p404-nav {
          position: relative; z-index: 10;
          display: flex; justify-content: center; gap: 36px; padding-top: 24px;
        }
        .p404-nav a {
          text-decoration: none; color: rgba(255,255,255,0.75);
          font-size: 10px; font-weight: 400; letter-spacing: 2px; text-transform: uppercase;
          transition: color 0.2s;
        }
        .p404-nav a:hover { color: #fff; }
        .p404-content {
          position: relative; z-index: 10; flex: 1;
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; margin-top: -30px; text-align: center;
        }
        .p404-row { display: flex; align-items: center; line-height: 1; }
        .p404-digit {
          font-family: 'Oswald', Impact, sans-serif;
          font-size: clamp(110px, 18vw, 200px);
          font-weight: 700; color: #fff;
          letter-spacing: -8px;
          text-shadow: 0 2px 50px rgba(0,0,0,0.8);
        }
        .p404-zero { position: relative; display: inline-flex; align-items: center; justify-content: center; }
        .p404-car {
          position: absolute; bottom: 13%; left: 50%;
          transform: translateX(-50%); width: 82%; pointer-events: none;
        }
        .p404-car svg { width: 100%; height: auto; filter: drop-shadow(0 5px 18px rgba(200,10,10,0.55)); }
        .p404-h1 { font-size: clamp(14px, 2vw, 20px); font-weight: 400; letter-spacing: 0.3px; margin-top: 10px; }
        .p404-desc {
          font-size: clamp(10px, 1vw, 12px); color: rgba(255,255,255,0.5);
          max-width: 480px; line-height: 1.8; margin-top: 8px;
          font-weight: 300; padding: 0 16px;
        }
        .p404-btn {
          margin-top: 24px; padding: 13px 38px;
          background: #bf1320; color: #fff; border: none; cursor: pointer;
          text-transform: uppercase; font-size: 11px; font-weight: 600;
          letter-spacing: 2.5px; font-family: 'Roboto', sans-serif;
          transition: background 0.2s, transform 0.15s;
        }
        .p404-btn:hover { background: #d91825; transform: translateY(-1px); }
        .p404-btn:active { background: #a01018; transform: translateY(0); }
      `}</style>

      <div className="p404-scene">
        <div className="p404-overlay" />

        {/* City skyline */}
        <svg className="p404-sky" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyBg404" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#160606" />
              <stop offset="100%" stopColor="#070202" />
            </linearGradient>
          </defs>
          <rect width="1200" height="400" fill="url(#skyBg404)" />
          <ellipse cx="600" cy="150" rx="500" ry="130" fill="rgba(140,10,10,0.13)" />
          <g fill="#1a0909">
            <rect x="0"    y="160" width="48"  height="240" /><rect x="44"   y="185" width="32"  height="215" />
            <rect x="72"   y="148" width="44"  height="252" /><rect x="112"  y="172" width="28"  height="228" />
            <rect x="136"  y="155" width="50"  height="245" /><rect x="182"  y="168" width="26"  height="232" />
            <rect x="204"  y="135" width="62"  height="265" /><rect x="262"  y="165" width="32"  height="235" />
            <rect x="290"  y="148" width="50"  height="252" /><rect x="336"  y="170" width="28"  height="230" />
            <rect x="360"  y="150" width="70"  height="250" /><rect x="426"  y="162" width="36"  height="238" />
            <rect x="458"  y="140" width="55"  height="260" /><rect x="509"  y="165" width="32"  height="235" />
            <rect x="537"  y="130" width="78"  height="270" /><rect x="611"  y="158" width="40"  height="242" />
            <rect x="647"  y="145" width="50"  height="255" /><rect x="693"  y="168" width="28"  height="232" />
            <rect x="717"  y="135" width="74"  height="265" /><rect x="787"  y="162" width="36"  height="238" />
            <rect x="819"  y="148" width="50"  height="252" /><rect x="865"  y="172" width="28"  height="228" />
            <rect x="889"  y="150" width="68"  height="250" /><rect x="953"  y="163" width="36"  height="237" />
            <rect x="985"  y="138" width="56"  height="262" /><rect x="1037" y="165" width="30"  height="235" />
            <rect x="1063" y="148" width="62"  height="252" /><rect x="1121" y="168" width="28"  height="232" />
            <rect x="1145" y="150" width="55"  height="250" />
          </g>
          <g fill="#0e0404">
            <rect x="8"    y="220" width="42"  height="180" /><rect x="60"   y="210" width="24"  height="190" />
            <rect x="120"  y="228" width="36"  height="172" /><rect x="164"  y="215" width="20"  height="185" />
            <rect x="218"  y="200" width="44"  height="200" /><rect x="268"  y="225" width="24"  height="175" />
            <rect x="312"  y="208" width="40"  height="192" /><rect x="358"  y="222" width="27"  height="178" />
            <rect x="398"  y="210" width="50"  height="190" /><rect x="450"  y="202" width="24"  height="198" />
            <rect x="488"  y="224" width="36"  height="176" /><rect x="530"  y="208" width="58"  height="192" />
            <rect x="592"  y="218" width="27"  height="182" /><rect x="620"  y="204" width="45"  height="196" />
            <rect x="668"  y="226" width="32"  height="174" /><rect x="704"  y="210" width="50"  height="190" />
            <rect x="758"  y="202" width="27"  height="198" /><rect x="786"  y="218" width="45"  height="182" />
            <rect x="834"  y="226" width="32"  height="174" /><rect x="870"  y="210" width="50"  height="190" />
            <rect x="924"  y="202" width="27"  height="198" /><rect x="952"  y="218" width="45"  height="182" />
            <rect x="1000" y="226" width="32"  height="174" /><rect x="1036" y="210" width="50"  height="190" />
            <rect x="1090" y="202" width="27"  height="198" /><rect x="1118" y="218" width="45"  height="182" />
            <rect x="1166" y="210" width="34"  height="190" />
          </g>
          <g fill="rgba(255,140,40,0.2)">
            <rect x="18"   y="232" width="4" height="3" /><rect x="26"   y="232" width="4" height="3" />
            <rect x="18"   y="242" width="4" height="3" /><rect x="26"   y="246" width="4" height="3" />
            <rect x="130"  y="238" width="4" height="3" /><rect x="140"  y="232" width="4" height="3" />
            <rect x="226"  y="212" width="4" height="3" /><rect x="236"  y="220" width="4" height="3" />
            <rect x="408"  y="220" width="4" height="3" /><rect x="418"  y="228" width="4" height="3" />
            <rect x="540"  y="218" width="4" height="3" /><rect x="552"  y="226" width="4" height="3" />
            <rect x="628"  y="214" width="4" height="3" /><rect x="640"  y="222" width="4" height="3" />
            <rect x="714"  y="220" width="4" height="3" /><rect x="726"  y="212" width="4" height="3" />
            <rect x="844"  y="236" width="4" height="3" /><rect x="856"  y="228" width="4" height="3" />
            <rect x="960"  y="214" width="4" height="3" /><rect x="972"  y="222" width="4" height="3" />
            <rect x="1044" y="222" width="4" height="3" /><rect x="1056" y="214" width="4" height="3" />
            <rect x="1128" y="230" width="4" height="3" /><rect x="1140" y="222" width="4" height="3" />
          </g>
          <rect x="0" y="366" width="1200" height="34" fill="#080202" />
          <rect x="0" y="364" width="1200" height="4"  fill="rgba(150,15,15,0.18)" />
        </svg>

        {/* Navigation */}
        <nav className="p404-nav">
          <a href="/">КАТАЛОГ АВТО</a>
          <a href="/trade-in">TRADE-IN</a>
          <a href="/credit">ЭКСПРЕСС КРЕДИТ</a>
          <a href="/contacts">КОНТАКТЫ</a>
        </nav>

        {/* Content */}
        <div className="p404-content">
          <div className="p404-row">
            <span className="p404-digit">4</span>

            <span className="p404-zero">
              <span className="p404-digit">0</span>
              <div className="p404-car">
                <svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor="#ee1a2c" />
                      <stop offset="55%"  stopColor="#c40f1e" />
                      <stop offset="100%" stopColor="#820810" />
                    </linearGradient>
                    <linearGradient id="carRoof" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor="#d41020" />
                      <stop offset="100%" stopColor="#9a0c18" />
                    </linearGradient>
                    <linearGradient id="carGlass" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%"   stopColor="rgba(170,215,255,0.5)" />
                      <stop offset="100%" stopColor="rgba(70,130,200,0.25)" />
                    </linearGradient>
                    <radialGradient id="carWheel" cx="50%" cy="38%" r="52%">
                      <stop offset="0%"   stopColor="#4a4a4a" />
                      <stop offset="100%" stopColor="#101010" />
                    </radialGradient>
                  </defs>
                  <ellipse cx="190" cy="124" rx="155" ry="7" fill="rgba(0,0,0,0.4)" />
                  <path d="M35,92 L35,72 Q37,65 58,63 L318,63 Q340,63 344,72 L344,92 Z" fill="url(#carBody)" />
                  <path d="M108,63 Q113,40 130,31 L248,31 Q272,32 278,41 L290,63 Z" fill="url(#carRoof)" />
                  <path d="M290,63 L318,63 Q340,63 344,72 L344,77 L290,68 Z" fill="#aa0c1a" />
                  <path d="M326,75 L352,75 L356,84 L352,92 L326,92 Z" fill="#960a16" />
                  <path d="M35,72 L58,63 L108,63 L108,69 L40,69 Z" fill="#aa0c1a" />
                  <rect x="346" y="80" width="16" height="13" rx="2" fill="#7a0810" />
                  <rect x="18"  y="80" width="16" height="13" rx="2" fill="#7a0810" />
                  <rect x="58"  y="89" width="268" height="7" rx="2" fill="#820810" />
                  <line x1="192" y1="65" x2="194" y2="92" stroke="#a00c18" strokeWidth="1.5" />
                  <rect x="142" y="73" width="22" height="5" rx="2.5" fill="#cc1020" />
                  <rect x="220" y="73" width="22" height="5" rx="2.5" fill="#cc1020" />
                  <path d="M116,62 Q120,41 133,34 L180,34 L180,62 Z" fill="url(#carGlass)" opacity="0.95" />
                  <path d="M184,34 L240,34 Q266,34 272,44 L276,62 L184,62 Z" fill="url(#carGlass)" opacity="0.88" />
                  <path d="M116,62 Q120,41 133,34 L180,34 L180,62 Z" fill="none" stroke="#820810" strokeWidth="1.3" />
                  <path d="M184,34 L240,34 Q266,34 272,44 L276,62 L184,62 Z" fill="none" stroke="#820810" strokeWidth="1.3" />
                  <rect x="180" y="34" width="4"   height="28" fill="#820810" />
                  <rect x="124" y="30" width="132" height="3.5" rx="1.5" fill="#8c0a14" />
                  <rect x="134" y="27" width="5" height="4" rx="1" fill="#680810" />
                  <rect x="246" y="27" width="5" height="4" rx="1" fill="#680810" />
                  <ellipse cx="344" cy="71" rx="6"   ry="4.5" fill="rgba(255,245,190,0.92)" />
                  <ellipse cx="344" cy="71" rx="3.5" ry="2.5" fill="rgba(255,255,230,1)" />
                  <rect x="22" y="67" width="9" height="11" rx="2" fill="rgba(255,50,50,0.9)" />
                  <path d="M134,33 Q188,26 248,32 Q222,29 188,30 Q158,29 134,33 Z" fill="rgba(255,255,255,0.2)" />
                  {/* Front wheel */}
                  <circle cx="292" cy="98" r="25" fill="url(#carWheel)" />
                  <circle cx="292" cy="98" r="19" fill="#181818" />
                  <circle cx="292" cy="98" r="13" fill="#202020" />
                  <line x1="292" y1="80" x2="292" y2="116" stroke="#3a3a3a" strokeWidth="3" />
                  <line x1="274" y1="98" x2="310" y2="98"  stroke="#3a3a3a" strokeWidth="3" />
                  <line x1="279" y1="85" x2="305" y2="111" stroke="#3a3a3a" strokeWidth="3" />
                  <line x1="305" y1="85" x2="279" y2="111" stroke="#3a3a3a" strokeWidth="3" />
                  <circle cx="292" cy="98" r="5" fill="#484848" />
                  <path d="M270,88 Q292,74 314,88" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" />
                  {/* Rear wheel */}
                  <circle cx="96" cy="98" r="25" fill="url(#carWheel)" />
                  <circle cx="96" cy="98" r="19" fill="#181818" />
                  <circle cx="96" cy="98" r="13" fill="#202020" />
                  <line x1="96"  y1="80" x2="96"  y2="116" stroke="#3a3a3a" strokeWidth="3" />
                  <line x1="78"  y1="98" x2="114" y2="98"  stroke="#3a3a3a" strokeWidth="3" />
                  <line x1="83"  y1="85" x2="109" y2="111" stroke="#3a3a3a" strokeWidth="3" />
                  <line x1="109" y1="85" x2="83"  y2="111" stroke="#3a3a3a" strokeWidth="3" />
                  <circle cx="96" cy="98" r="5" fill="#484848" />
                  <path d="M74,88 Q96,74 118,88" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" />
                </svg>
              </div>
            </span>

            <span className="p404-digit">4</span>
          </div>

          <h1 className="p404-h1">Страница не найдена!</h1>
          <p className="p404-desc">
            
          </p>

          <button className="p404-btn" onClick={() => navigate("/")}>
            НА ГЛАВНУЮ
          </button>
        </div>
      </div>
    </>
  );
}