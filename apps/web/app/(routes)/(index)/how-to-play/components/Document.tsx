import { styled } from "styled-components";

const Root = styled.div`
  --row-margin-s: 0.35rem;
  --row-margin-m: 0.7rem;
  --row-margin-l: 1.05rem;
  font-size: 0.8rem;
  padding: 0 0.25rem 3.75rem;
  line-height: 1.8;
  word-break: keep-all;
  h1 {
    font-size: 1.4rem;
    margin: 1rem 0;
  }
  h2 {
    position: sticky;
    top: 0;
    font-size: 1rem;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-bottom: var(--row-margin-l);
    background: linear-gradient(
      to bottom,
      ${(p) => p.theme.palette.primary.background},
      color-mix(in srgb, ${(p) => p.theme.palette.primary.background}, black 12%)
    );
    padding: var(--row-margin-m) calc(50vw - 50%);
    box-shadow: 0px 2px 0px 0px
      color-mix(in srgb, ${(p) => p.theme.palette.primary.background}, black 22%);
  }
  h3 {
    font-size: 1rem;
    margin: var(--row-margin-m) 0;
  }
  h4 {
    margin: var(--row-margin-s) 0;
  }
  section {
    margin: var(--row-margin-m) 0;
  }
  section:has(+ section) {
    margin: var(--row-margin-m) 0 var(--row-margin-l);
  }
  section:has(~ :not(section)) {
    margin-bottom: 2rem;
  }
  p {
    margin: var(--row-margin-s) 0;
  }
  dl {
    margin: var(--row-margin-s);
  }
  dt {
    font-weight: 500;
  }
  dd {
    margin: 0 var(--row-margin-m) var(--row-margin-s);
  }
  li {
    list-style-position: inside;
  }
`;

export default function Document() {
  return (
    <Root>
      <h1>플레이 방법</h1>
      <h2>게임 이해</h2>
      <section>
        <section>
          <h3>기본 정보</h3>
          <ul>
            <li>권장 인원: 8인 이상, 3인 이하 플레이 불가</li>
            <li>소요 시간: 인원 수에 따라 다름, 8인 기준 약 5분</li>
          </ul>
        </section>
        <section>
          <h3>규칙</h3>
          <p>
            우선 참가자 중 한 명이 '거짓말쟁이'가 되고 그는 이 사실을 알게 됩니다.
            <br />
            그리고 모든 참가자는 '키워드'를 받습니다. 이 때, 거짓말쟁이는 다른 '가짜 키워드'를
            받습니다.
            <br />
            이제 본격적으로 대화 시간에 이르는데, 각 참가자들은 자신이 받은 키워드에 알맞게 표현을
            합니다 ─ 서로가 키워드를 유추하기 어렵게끔 정확한 표현 대신 센스있는 표현을 사용하는 게
            좋습니다.
            <br />
            이후 투표 시간에 참가자들은 거짓말쟁이일 것 같은 사람을 투표합니다. 가장 많은 표를 받은
            참가자는
          </p>
        </section>
      </section>
      <h2>게임 주의사항</h2>
      <section>
        <h3>다른 참가자에게 알려주면 안 되는 정보들</h3>
        <p>
          게임 플레이 중 다른 참가자들에게 공유하면 안 되는 정보가 있습니다. 예를 들면 로컬 플레이
          중 자신의 '별명'과 '순서'는 공유할 수 있지만 자신이 받은 '키워드'는 공유하면 안 됩니다.
          <br />
          이를 주의하려면 화면의 지시에 잘 따라주세요. "다른 참가자에게 알려주지 마세요!"와 같이
          표시됩니다
        </p>
      </section>
      <h2>게임 준비 단계</h2>
      <section>
        <h3>1. 게임 방식을 선택하기</h3>
        <p>아래 중에 선택할 수 있습니다</p>
        <dl>
          <dt>온라인 플레이 (추천)</dt>
          <dd>
            장소에 상관 없이 온라인에서 만나 즐깁니다. 참가자들을 위해 편리한 온라인 채팅이
            제공됩니다
          </dd>
          <dt>로컬 플레이</dt>
          <dd>
            모두 한 자리에 모여 게임을 즐깁니다. 참가자들은 사회자 역할을 할 하나의 기기를 선택하고,
            이 기기를 서로 전달하며 화면에 나타나는 지시에 따라 직접 소통하여 진행합니다
          </dd>
        </dl>
      </section>
      <section>
        <h3>2. 게임 방을 만들기</h3>
        <section>
          <h4>온라인 플레이의 경우</h4>
          <p>
            게임 주최자('호스트')가 게임 방을 만듭니다.
            <br />
            화면 지시에 따라 게임 룰을 정하고 참가자들에게 방 입장 방법을 공유합니다.
            <br />
            참가자들은 각자 별명을 선점할 수 있고 모든 참가자가 준비됐으면 호스트는 게임을 시작하면
            됩니다
          </p>
          <h4>로컬 플레이의 경우</h4>
          <p>
            사회자 역할을 할 기기 하나를 준비합니다. (휴대전화 추천)
            <br />
            화면 지시에 따라 게임 룰을 설정합니다.
            <br />
            그리고 참가자들은 자신의 별명과 순서를 배정 받습니다.
            <br />
            순서에 맞게 서로 기기를 주고 받기 쉽도록 자리 잡습니다.
            <br />
            이제 게임을 시작하면 됩니다
          </p>
        </section>
        <section>
          <p>게임을 시작하면 지시에 따라 게임을 진행합니다</p>
        </section>
      </section>
    </Root>
  );
}
