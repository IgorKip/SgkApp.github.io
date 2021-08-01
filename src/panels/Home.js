import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, PanelHeaderButton } from '@vkontakte/vkui';
import { Icon28SettingsOutline } from '@vkontakte/icons';

import ScrollData from '../components/scrollDate/ScrollDate';
import TimeTable from '../components/timetable/TimeTable';

const Home = ({ id, go, fetchedUser }) => {
	const [activeDate, setActiveDate] = useState(null);

	return(
		<Panel id={id}>
		<PanelHeader left={<PanelHeaderButton onClick={go} data-to="setting"> <Icon28SettingsOutline/></PanelHeaderButton>}>
			Расписание
		</PanelHeader>
		{/* {fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>} */}
		
		<ScrollData goDate={setActiveDate}/>

		<TimeTable date={activeDate}/>

		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Show me the Persik, please
				</Button>
			</Div>
		</Group>
	</Panel>
	);
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
