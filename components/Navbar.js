import {Nav, Navbar} from 'react-bootstrap';
import Link from 'next/link';
import {useTheme} from '../providers/ThemeProvider';

const BlogNavbar = ({theme, toggleTheme}) => {

	return (
		 <Navbar
				variant={theme.type}
				className="fj-navbar fj-nav-base"
				bg="transparent"
				expand="lg"
		 >
			 <Navbar.Brand className="fj-navbar-brand">
				 <Link href={'/'}>
					 <a style={{color: theme.fontColor}}>Lasha Tatulashvili</a>
				 </Link >
			 </Navbar.Brand >
			 <Navbar.Toggle aria-controls="basic-navbar-nav"/>
			 <Navbar.Collapse id="basic-navbar-nav">
				 <Nav className="ml-auto">
					 <Nav.Link
							as={() =>
								 <Link href={'/'}>
									 <a className="fj-navbar-item fj-navbar-link">Home</a >
								 </Link >
							}
							href="/"
					 />
						 <button className="btn btn-success" onClick={toggleTheme}>
							 {theme.type}
						 </button>
				 </Nav >
			 </Navbar.Collapse >
		 </Navbar >
	);
};

export default BlogNavbar;