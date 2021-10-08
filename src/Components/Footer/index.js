import './styles.scss';

const menu = [
  {
    href: 'support',
    text: 'Support',
  },
  {
    href: 'learning',
    text: 'Learning',
  },
  {
    href: 'ru',
    text: 'Русская версия',
  },
];

function Footer({wrapper}) {
  const FooterWrapper = wrapper;

  return ( 
    <footer className="footer">
      <FooterWrapper>
        <div className="footer__inner">
          <nav className="footer__menu">
            <ul className="footer__menu-list">
              {menu.map(({href, text}) => (
                <li key={href} className="footer__menu-item">
                  <a className="footer__link" href={href}>{text}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer__copyright">&copy; 2020 Your Name</div>
        </div>
      </FooterWrapper>
    </footer>
   );
}

export default Footer;