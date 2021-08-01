import React from 'react';
import PropTypes from 'prop-types';

import { Icon12Download } from '@vkontakte/icons';
import { ChipsSelect } from '@vkontakte/vkui/dist/unstable';

import { Panel, PanelHeader, PanelHeaderBack, Group, FormItem, CustomSelectOption, Avatar, Chip} from '@vkontakte/vkui';

const groups = [{ value: 'download', label: 'Скачать все и вся!', icon: <Icon12Download /> }, { value: '1', label: 'Arctic Monkeys'}, {value: '2', label: 'Звери'}, {value: '4', label: 'FACE'}, {value: '3', label: 'Depeche Mode'}, {value: '5', label: 'Linkin Park'}]

const Setting = props => {
    const [selectedGroups, setSelectedGroups] = React.useState([]);

    const groupsChipsProps = {
        value: selectedGroups,
        onChange: setSelectedGroups,
        options: groups,
        placeholder:"Не выбраны",
        emptyText: 'Совсем ничего не найдено',
      };

	return(
        <Panel id={props.id}>
            <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home"/>}>
                Настройки
            </PanelHeader>
            <Group>
                <FormItem top="Выберите группы">
                    <ChipsSelect
                    {...groupsChipsProps}
                    showSelected={false}
                    closeAfterSelect={false}
                    onChangeStart={(e, option) => {
                        if (option.value === 'download') {
                        e.preventDefault();
                        alert('download!');
                        }   
                    }}
                    renderChip={({ value, label, option: { src, icon }, ...rest }) => (
                        <Chip
                        value={value}
                        before={<Avatar size={20} />}
                        {...rest}
                        >
                        {label}
                        </Chip>
                    )}
                    renderOption={({ option: { value, icon }, ...otherProps }) => {
                        return (
                        <CustomSelectOption
                            before={icon ? <Avatar size={20}>{icon}</Avatar> : <Avatar size={20} />}
                            {...otherProps}
                        />
                        );
                    }}
                    />
                </FormItem>
            </Group>
        </Panel>
    );
};

Setting.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Setting;
