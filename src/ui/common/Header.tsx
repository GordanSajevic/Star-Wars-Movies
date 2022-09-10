import { PageHeader } from 'antd';

const Header = () => {
  return (
    <header className='header'>
      <PageHeader
        className="site-page-header"
        title="Star Wars Movies"
        avatar={{
          src: process.env.PUBLIC_URL + "logo.jpg",
        }}
      />
    </header>
  );
};

export default Header;