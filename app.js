const TRIP_CONFIG = {
  title: 'めぐとおのゆーどこかにビューン デジタルパンフレットIN青森',
  coupleDateMMDD: '0000', // 付き合った日をMMDDで入れる（例：1月1日なら0101）
  departureDateMMDD: '0613',
  passwordOverride: '', // ここに8桁を入れると、合算ルールより優先されます
  days: [
    {
      id: 'day1',
      label: '1日目',
      items: [
        { time: '10:07', icon: '🚄', place: '新青森駅 着', note: '電車で青森駅へ移動。旅の始まりは新幹線の余韻から。', link: 'https://www.jreast.co.jp/estation/station/info.aspx?StationCd=1586' },
        { time: '10:35', icon: '🐟', place: '青森魚菜センター 本店', note: '名物「のっけ丼」で贅沢ランチ。好きな具材を重ねて、ふたりだけの海鮮丼に。', link: 'https://nokkedon.jp/' },
        { time: '11:45', icon: '🚗', place: '青森駅周辺でレンタカー', note: 'ドライブ出発。車内BGMとおやつも忘れずに。', link: 'https://www.ekiren.co.jp/annai/map/02tohoku/aomori.html' },
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
        { time: '13:45', icon: '🔑', place: '青森駅へ戻りレンタカー返却', note: 'ここで車を返すことで、この後2人ともお酒が飲めます！', link: 'https://www.ekiren.co.jp/annai/map/02tohoku/aomori.html' },
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

const currentPassword = () => TRIP_CONFIG.passwordOverride || `${TRIP_CONFIG.coupleDateMMDD}${TRIP_CONFIG.departureDateMMDD}`;

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
}

function unlockSite() {
  state.unlocked = true;
  sessionStorage.setItem('aomoriUnlocked', 'true');
  gate.classList.add('is-hidden');
  shell.classList.remove('is-locked');
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

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
}

renderTimeline('day1', 'day1Timeline');
renderTimeline('day2', 'day2Timeline');
renderLinks();
buildDots();
setupPassword();
setupNavigation();
setupReveal();
goToPage(0);
