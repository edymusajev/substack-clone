import Image from 'next/image';

const Logo = () => {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4">
      <title>Substack</title>
      <path
        fill="#FF6719"
        d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"
      />
    </svg>
  );
};
const Footer = () => {
  return (
    <>
      <small className="text-gray-500 mb-8">
        © 2021 Scott Alexander. See <a href="#">privacy</a>, <a href="#">terms</a> and{' '}
        <a href="#">information collection notice</a>
      </small>
      <button className="border px-3 py-2 rounded-md text-gray-400 bg-white flex items-center mb-4">
        <Logo />
        <span className="ml-2">Publish on Substack</span>
      </button>
      <small className=" text-gray-500">
        Astral Codex Ten is on <a>Substack</a> – the place for independent writing
      </small>
    </>
  );
};

export default Footer;
