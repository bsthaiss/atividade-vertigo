import Logo from '../assets/logo.svg'

export function Header() {
    return (
        <div className="logo">
            <img src={Logo} alt="Logo da página" />
        </div>
    );
}