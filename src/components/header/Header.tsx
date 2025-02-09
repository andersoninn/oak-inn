import NavbarUI from './NavbarUI';

export default function Header() {
  return (
    <>
      <section className={`absolute top-0 w-full z-10 `}>
        <NavbarUI />
      </section>
    </>
  );
}
