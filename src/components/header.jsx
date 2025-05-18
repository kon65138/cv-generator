import githubImg from '../assets/github-original.svg';
export function Header() {
  return (
    <header>
      <h1 className="title">cv generator</h1>
      <div>by kon65138</div>
      <a
        className="githubLink"
        href="https://github.com/kon65138"
        target="_blank"
      >
        <img src={githubImg} alt="github logo" />
      </a>
    </header>
  );
}
