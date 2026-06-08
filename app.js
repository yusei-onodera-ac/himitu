const TRIP_CONFIG = {
  title: 'めぐとおのゆーどこかにビューン デジタルパンフレットIN青森',
  coupleDateMMDD: '0000', // 付き合った日をMMDDで入れる（例：1月1日なら0101）
  departureDateMMDD: '0613',
  passwordOverride: '', // ここに8桁を入れると、合算ルールより優先されます
  mapSource: {
    name: '国土地理院 標準地図',
    tileUrl: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
    attribution: '地図：国土地理院 標準地図（タイル）',
    zoom: 10
  },
  mapSpots: [
    { name: '新青森駅', icon: '🚄', type: 'planned', lat: 40.8275, lng: 140.6933, note: 'ビューンで到着＆帰りもここから。', link: 'https://www.jreast.co.jp/estation/station/info.aspx?StationCd=1586' },
    { name: '青森魚菜センター', icon: '🐟', type: 'planned', lat: 40.8285, lng: 140.7362, note: 'のっけ丼で旅の最初から優勝。', link: 'https://nokkedon.jp/' },
    { name: '三内丸山遺跡', icon: '🪵', type: 'planned', lat: 40.8106, lng: 140.6969, note: '世界遺産の縄文ロマン。', link: 'https://sannaimaruyama.pref.aomori.jp/' },
    { name: '青森県立美術館', icon: '🐶', type: 'planned', lat: 40.8098, lng: 140.6954, note: 'あおもり犬に会いに行く。', link: 'https://www.aomori-museum.jp/' },
    { name: '奥入瀬渓流・銚子大滝', icon: '💧', type: 'planned', lat: 40.5703, lng: 140.9954, note: '銚子大滝と水音の散歩道。', link: 'https://oirase-fm.com/' },
    { name: '十和田湖', icon: '🏮', type: 'planned', lat: 40.4248, lng: 140.8972, note: '湖水まつりで夜までロマンチック。', link: 'https://kosuimaturi.com/' },
    { name: '弘前城', icon: '🌸', type: 'famous', lat: 40.6074, lng: 140.4640, note: '桜で有名。次回の春旅候補。', link: 'https://www.hirosakipark.jp/' },
    { name: '八甲田ロープウェー', icon: '🚡', type: 'famous', lat: 40.6814, lng: 140.8327, note: '山の絶景。晴れた日に狙いたい。', link: 'https://www.hakkoda-ropeway.jp/' },
    { name: '酸ヶ湯温泉', icon: '♨️', type: 'famous', lat: 40.6507, lng: 140.8492, note: '青森の名湯。温泉好きなら候補。', link: 'https://sukayu.jp/' },
    { name: '浅虫温泉', icon: '🌊', type: 'famous', lat: 40.8912, lng: 140.8615, note: '海沿い温泉。ゆるい寄り道候補。', link: 'https://www.asamushi.com/' },
    { name: '白神山地', icon: '🌳', type: 'famous', lat: 40.4749, lng: 140.0145, note: '世界自然遺産。いつか深呼吸旅。', link: 'https://www.shirakami-visitor.jp/' }
  ],
  days: [
    {
      id: 'day1',
      label: '1日目',
      items: [
        { time: '10:07', icon: '🚄', place: '新青森駅 着', note: '電車で青森駅へ移動。旅の始まりは新幹線の余韻から。', link: 'https://www.jreast.co.jp/estation/station/info.aspx?StationCd=1586' },
        { time: '10:35', icon: '🐟', place: '青森魚菜センター 本店', note: '名物「のっけ丼」で贅沢ランチ。好きな具材を重ねて、ふたりだけの海鮮丼に。', link: 'https://nokkedon.jp/' },
        { time: '11:45', icon: '🚙', place: '青森駅のタイムズカーシェア', note: 'タイムズカーシェアを借りてドライブ出発。車内BGMとおやつも忘れずに。', link: 'https://share.timescar.jp/view/station/search.jsp?keyword=%E9%9D%92%E6%A3%AE%E9%A7%85' },
        { time: '13:00', icon: '🍵', place: '萱野高原', note: '「長生き茶」でひと休み。八甲田の風を吸ってリセット。', link: 'https://www.atca.info/spot/kayanokogen/' },
        { time: '14:00', icon: '💧', place: '奥入瀬渓流・銚子大滝', note: '滝を見学・散策。水音と苔のグリーンに包まれる癒やし時間。', link: 'https://oirase-fm.com/' },
        { time: '15:00', icon: '♨️', place: 'ホテル十和田荘 チェックイン', note: '車をホテルに置いて、夕方から徒歩で湖畔へ。', link: 'https://www.towadaso.co.jp/' },
        { time: '夕方', icon: '🏮', place: '十和田湖湖水まつり', note: 'バルーンランタンや花火でロマンチックな夜。荒天情報は公式SNSも確認。', link: 'https://kosuimaturi.com/' }
      ]
    },
    {
      id: 'day2',
      label: '2日目',
      items: [
        { time: '08:30', icon: '🚗', place: 'ホテル十和田荘を出発', note: '朝の十和田湖を感じながら青森市方面へ。', link: 'https://www.towadaso.co.jp/' },
        { time: '11:00', icon: '🪵', place: '三内丸山遺跡', note: '世界遺産の縄文遺跡を見学。大型竪穴建物と六本柱が見どころ。', link: 'https://sannaimaruyama.pref.aomori.jp/' },
        { time: '12:00', icon: '🐶', place: '青森県立美術館', note: '「あおもり犬」を見学。館内カフェ「4匹の猫」でランチ。', link: 'https://www.aomori-museum.jp/' },
        { time: '13:45', icon: '🔑', place: '青森駅へ戻りタイムズカーシェア返却', note: 'ここで車を返すことで、この後2人ともお酒が飲めます！', link: 'https://share.timescar.jp/view/station/search.jsp?keyword=%E9%9D%92%E6%A3%AE%E9%A7%85' },
        { time: '14:15', icon: '🏮', place: 'ねぶたの家 ワ・ラッセ', note: '本物の大型ねぶたを体感。光と紙と迫力の青森文化。', link: 'https://www.nebuta.jp/warasse/' },
        { time: '15:15', icon: '🍶', place: '地酒庵 さとう（またはアスパム）', note: '青森の絶品地酒とおつまみで乾杯！', link: 'https://www.aomori-kanko.or.jp/aspam/' },
        { time: '16:15', icon: '🍎', place: 'A-FACTORY ＆ 駅前ビーチ', note: 'お土産購入＆海辺をお散歩。シードルやりんご土産もチェック。', link: 'https://afactory1p.storeinfo.jp/' },
        { time: '17:30', icon: '🚃', place: '青森駅 から 新青森駅へ', note: '帰りの新幹線に向けて移動。忘れ物チェック。', link: 'https://www.jreast.co.jp/estation/station/info.aspx?StationCd=25' },
        { time: '18:32', icon: '🚄', place: '新青森駅 発「はやぶさ64号」', note: '東京へ。駅弁食べながら飲むよお。', link: 'https://www.jreast.co.jp/' }
      ]
    }
  ]
};

const state = { page: 0, unlocked: sessionStorage.getItem('aomoriUnlocked') === 'true' };
const pages = [...document.querySelectorAll('.page')];
const shell = document.getElementById('siteShell');
const gate = document.getElementById('passwordGate');
const dots = document.getElementById('pageDots');
let deferredInstallPrompt;

const currentPassword = () => TRIP_CONFIG.passwordOverride || `${TRIP_CONFIG.coupleDateMMDD}${TRIP_CONFIG.departureDateMMDD}`;



function lngToTileX(lng, zoom) {
  return ((lng + 180) / 360) * (2 ** zoom);
}

function latToTileY(lat, zoom) {
  const latRad = lat * Math.PI / 180;
  return (1 - Math.log(Math.tan(latRad) + (1 / Math.cos(latRad))) / Math.PI) / 2 * (2 ** zoom);
}

function renderGsiTiles({ minTileX, minTileY, maxTileX, maxTileY, zoom }) {
  const tiles = [];
  for (let x = minTileX; x <= maxTileX; x += 1) {
    for (let y = minTileY; y <= maxTileY; y += 1) {
      const src = TRIP_CONFIG.mapSource.tileUrl
        .replace('{z}', zoom)
        .replace('{x}', x)
        .replace('{y}', y);
      tiles.push(`<img class="gsi-tile" src="${src}" alt="" loading="lazy" style="grid-column:${x - minTileX + 1}; grid-row:${y - minTileY + 1};" />`);
    }
  }
  return tiles.join('');
}

function renderAomoriMap() {
  const map = document.getElementById('aomoriMap');
  if (!map) return;

  const zoom = TRIP_CONFIG.mapSource.zoom;
  const tilePadding = 1;
  const tilePositions = TRIP_CONFIG.mapSpots.map((spot) => ({
    ...spot,
    tileX: lngToTileX(spot.lng, zoom),
    tileY: latToTileY(spot.lat, zoom)
  }));
  const minTileX = Math.floor(Math.min(...tilePositions.map((spot) => spot.tileX))) - tilePadding;
  const maxTileX = Math.floor(Math.max(...tilePositions.map((spot) => spot.tileX))) + tilePadding;
  const minTileY = Math.floor(Math.min(...tilePositions.map((spot) => spot.tileY))) - tilePadding;
  const maxTileY = Math.floor(Math.max(...tilePositions.map((spot) => spot.tileY))) + tilePadding;
  const tileColumns = maxTileX - minTileX + 1;
  const tileRows = maxTileY - minTileY + 1;

  map.style.setProperty('--tile-columns', tileColumns);
  map.style.setProperty('--tile-rows', tileRows);

  map.innerHTML = `
    <div class="gsi-map-stage" aria-hidden="true">
      <div class="gsi-tile-grid">
        ${renderGsiTiles({ minTileX, minTileY, maxTileX, maxTileY, zoom })}
      </div>
      <div class="map-soft-overlay"></div>
      <span class="map-kawaii-label label-aomori">AOMORI</span>
      <span class="map-kawaii-label label-trip">ふたり旅MAP</span>
      <span class="map-float map-float-apple">🍎</span>
      <span class="map-float map-float-sea">🌊</span>
    </div>
    ${tilePositions.map((spot, index) => {
      const x = ((spot.tileX - minTileX) / tileColumns) * 100;
      const y = ((spot.tileY - minTileY) / tileRows) * 100;
      return `
        <a class="map-spot ${spot.type} reveal" href="${spot.link}" target="_blank" rel="noopener noreferrer" style="--x:${x}%; --y:${y}%; --delay:${index * 45}ms">
          <span class="spot-icon"><b>${spot.icon}</b></span>
          <span class="spot-card">
            <strong>${spot.name}</strong>
            <small>${spot.note}</small>
          </span>
        </a>
      `;
    }).join('')}
    <p class="map-attribution">${TRIP_CONFIG.mapSource.attribution}</p>
  `;
}

function renderTimeline(dayId, mountId) {
  const day = TRIP_CONFIG.days.find((item) => item.id === dayId);
  const mount = document.getElementById(mountId);
  mount.innerHTML = day.items.map((item, index) => `
    <article class="timeline-card reveal" style="--delay:${index * 80}ms">
      <div class="time-chip">${item.time}</div>
      <div class="card-icon" aria-hidden="true">${item.icon}</div>
      <div>
        <h3>${item.place}</h3>
        <p>${item.note}</p>
        <a href="${item.link}" target="_blank" rel="noopener noreferrer">公式・関連HPを開く ↗</a>
      </div>
    </article>
  `).join('');
}

function renderLinks() {
  const unique = new Map();
  TRIP_CONFIG.days.flatMap((day) => day.items).forEach((item) => {
    if (!unique.has(item.place)) unique.set(item.place, item);
  });
  document.getElementById('linkGrid').innerHTML = [...unique.values()].map((item) => `
    <a class="link-card reveal" href="${item.link}" target="_blank" rel="noopener noreferrer">
      <span>${item.icon}</span>
      <strong>${item.place}</strong>
      <small>${new URL(item.link).hostname}</small>
    </a>
  `).join('');
}

function buildDots() {
  dots.innerHTML = pages.map((_, index) => `<button aria-label="${index + 1}ページ目へ" data-dot="${index}"></button>`).join('');
  dots.addEventListener('click', (event) => {
    const dot = event.target.closest('[data-dot]');
    if (dot) goToPage(Number(dot.dataset.dot));
  });
}

function goToPage(next) {
  state.page = Math.max(0, Math.min(pages.length - 1, next));
  pages.forEach((page, index) => page.classList.toggle('is-active', index === state.page));
  [...dots.children].forEach((dot, index) => dot.classList.toggle('is-active', index === state.page));
  document.getElementById('prevPage').disabled = state.page === 0;
  document.getElementById('nextPage').disabled = state.page === pages.length - 1;
  const progress = document.getElementById('routeProgressBar');
  if (progress) {
    const percent = pages.length <= 1 ? 100 : (state.page / (pages.length - 1)) * 100;
    progress.style.width = `${percent}%`;
  }
}

function unlockSite() {
  state.unlocked = true;
  sessionStorage.setItem('aomoriUnlocked', 'true');
  gate.classList.add('is-hidden');
  shell.classList.remove('is-locked');
  showInstallPanel();
  goToPage(0);
}

function setupPassword() {
  if (state.unlocked) unlockSite();
  document.getElementById('passwordForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('passwordInput');
    const normalized = input.value.replace(/\D/g, '');
    if (normalized === currentPassword()) {
      unlockSite();
      return;
    }
    document.getElementById('passwordError').textContent = '合言葉がちがうみたい。8桁の数字をもう一度確認してね。';
    input.select();
  });
}


function isStandaloneApp() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

function showInstallPanel() {
  const panel = document.getElementById('installPanel');
  const help = document.getElementById('installHelp');
  if (!panel || isStandaloneApp() || localStorage.getItem('aomoriInstallDismissed') === 'true') return;

  panel.hidden = false;
  if (!deferredInstallPrompt) {
    help.textContent = 'ログイン成功！iPhoneは共有ボタンから「ホーム画面に追加」、Androidはブラウザメニューまたはボタンで追加できるよ。';
  }
}

function setupPwaInstall() {
  const panel = document.getElementById('installPanel');
  const installButton = document.getElementById('installAppButton');
  const dismissButton = document.getElementById('dismissInstallButton');

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch((error) => {
        console.warn('Service worker registration failed:', error);
      });
    });
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    if (state.unlocked) showInstallPanel();
  });

  installButton?.addEventListener('click', async () => {
    if (!deferredInstallPrompt) {
      document.getElementById('installHelp').textContent = 'この端末ではブラウザの共有メニューから「ホーム画面に追加」を選んでね。';
      return;
    }
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = undefined;
    panel.hidden = true;
  });

  dismissButton?.addEventListener('click', () => {
    localStorage.setItem('aomoriInstallDismissed', 'true');
    panel.hidden = true;
  });

  window.addEventListener('appinstalled', () => {
    localStorage.setItem('aomoriInstallDismissed', 'true');
    if (panel) panel.hidden = true;
  });
}

function setupNavigation() {
  document.getElementById('prevPage').addEventListener('click', () => goToPage(state.page - 1));
  document.getElementById('nextPage').addEventListener('click', () => goToPage(state.page + 1));
  document.querySelectorAll('[data-go]').forEach((button) => button.addEventListener('click', () => goToPage(Number(button.dataset.go))));
  window.addEventListener('keydown', (event) => {
    if (!state.unlocked) return;
    if (event.key === 'ArrowRight') goToPage(state.page + 1);
    if (event.key === 'ArrowLeft') goToPage(state.page - 1);
  });
}


function setupMagicCanvas() {
  const canvas = document.getElementById('magicCanvas');
  const context = canvas.getContext('2d');
  const particles = Array.from({ length: 72 }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    size: 1.4 + Math.random() * 3.8,
    speed: 0.18 + Math.random() * 0.55,
    phase: index * 0.7,
    color: ['#ff8fab', '#4ea8de', '#76c893', '#ffd166'][index % 4]
  }));

  function resize() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }

  function draw(time = 0) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach((particle) => {
      const x = particle.x * window.innerWidth + Math.sin(time / 900 + particle.phase) * 24;
      const y = ((particle.y * window.innerHeight) + (time / 24) * particle.speed) % window.innerHeight;
      context.beginPath();
      context.fillStyle = particle.color;
      context.globalAlpha = 0.18 + Math.sin(time / 600 + particle.phase) * 0.08;
      context.arc(x, y, particle.size, 0, Math.PI * 2);
      context.fill();
    });
    context.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(draw);
}

function setupPointerMagic() {
  const glow = document.getElementById('cursorGlow');
  const tiltCard = document.getElementById('tiltCard');

  window.addEventListener('pointermove', (event) => {
    document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    glow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  });

  if (tiltCard) {
    tiltCard.addEventListener('pointermove', (event) => {
      const rect = tiltCard.getBoundingClientRect();
      const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
      const rotateX = -((event.clientY - rect.top) / rect.height - 0.5) * 10;
      tiltCard.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    tiltCard.addEventListener('pointerleave', () => {
      tiltCard.style.transform = '';
    });
  }
}

function setupMagneticButtons() {
  document.querySelectorAll('.magnetic').forEach((item) => {
    item.addEventListener('pointermove', (event) => {
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.16;
      item.style.transform = `translate(${x}px, ${y}px)`;
    });
    item.addEventListener('pointerleave', () => {
      item.style.transform = '';
    });
  });
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
}

renderAomoriMap();
renderTimeline('day1', 'day1Timeline');
renderTimeline('day2', 'day2Timeline');
renderLinks();
buildDots();
setupPassword();
setupPwaInstall();
setupNavigation();
setupReveal();
setupMagicCanvas();
setupPointerMagic();
setupMagneticButtons();
goToPage(0);
