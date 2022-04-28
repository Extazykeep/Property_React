import React from 'react';
import './ContactsLine.scss';
import { Container } from '@mui/material';
import { Phone, Email } from '@mui/icons-material';

const ContactsLine = () => {
	const [isDark, setIsDark] = React.useState(false);

	React.useEffect(() => {
		const root = document.getElementsByTagName('html')[0];
		isDark ? root.classList.add('dark') : root.classList.remove('dark');
	}, [isDark]);
	return (
		<div className="header-contacts-line">
			<input
				style={{ position: 'absolute', right: '10px', top: '5px' }}
				onChange={() => {
					setIsDark(!isDark);
				}}
				value={isDark}
				type="checkbox"
			/>
			<Container>
				<div className="header-line-content">
					<div className="contacts-line-left contacts-line-side">
						<ul>
							<li>
								<Phone />
								<a href="tel:+375299999999">+375299999999</a>
							</li>
							<li>
								<Email />
								<a href="mailto:info@something.com">
									info@something.com
								</a>
							</li>
						</ul>
					</div>
					<div className="contacts-line-right contacts-line-side">
						<ul>
							<li>
								<a
									href="https://fb.me/something"
									target="_blank"
								>
									Facebook
								</a>
							</li>
							<li>
								<a
									href="https://wa.me/375299999999"
									target="_blank"
								>
									Whatsapp
								</a>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</div>
	);
};
export default ContactsLine;
