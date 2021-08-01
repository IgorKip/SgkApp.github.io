import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {Group, Card, CardGrid} from '@vkontakte/vkui';

import './style.css';
//Массив с расписание групп
const raspisanie = [
    {
        id:1,
        group:'kc-15-01',
        items:[
            {
                number:'1',
                name:'Основый программирования',
                teacher: 'Анашкин И.А.',
                office:'19/1'
            },
            {
                number:'2',
                name:'ПП.01 Производственная практика (по\
                    профилю специальности) (Исполнительская\
                    практика)',
                teacher: 'Анашкин И.А.',
                office:'19/1'
            },
            {
                number:'3',
                name:'Основый программирования',
                teacher: 'Анашкин И.А.',
                office:'19/1'
            },
            {
                number:'4',
                name:'Основый программирования',
                teacher: 'Анашкин И.А.',
                office:'19/1'
            },
            {
                number:'5',
                name:'Основый программирования',
                teacher: 'Анашкин И.А.',
                office:'19/1'
            },
        ]
    },
    {
        id:1,
        group:'pks-15-01',
        items:[
            {
                number:'1',
                name:'Основый программирования',
                teacher: 'Анашкин И.А.',
                office:'19/1'
            },
            {
                number:'2',
                name:'Основый программирования',
                teacher: 'Анашкин И.А.',
                office:'19/1'
            },
            {
                number:'3',
                name:'Основый программирования',
                teacher: 'Анашкин И.А.',
                office:'19/1'
            },
            {
                number:'4',
                name:'Основый программирования',
                teacher: 'Анашкин И.А.',
                office:'19/1'
            },
            {
                number:'5',
                name:'Основый программирования',
                teacher: 'Анашкин И.А.',
                office:'19/1'
            },
        ]
    }
];

const TimeTable = ({date}) => {
    const [arTimeTable, setArTimeTable] = useState([]);

    useEffect(() => {
        setArTimeTable(raspisanie);
    });

    return(
        <Group>
            <CardGrid className="timetable" size="l">
            {
                arTimeTable.length > 0 &&
                arTimeTable.map((item) => {
                    return(
                        <Card size="l" mode="shadow" className="timetable__item" key={item.id}>
                            <div className="timetable__item-title">{item.group}</div>
                            <div className="timetable__item-lesson">
                                {
                                    item.items.length > 0 &&
                                    item.items.map((lesson) => {
                                        return(
                                            <div className="lesson">
                                                <div className="lesson-number">
                                                    <span>{lesson.number}</span>
                                                </div>
                                                <div className="lesson-name">{lesson.name}</div>
                                                <div className="lesson-teacher">{lesson.teacher}</div>
                                                <div className="lesson-office">{lesson.office}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Card>
                    )
                })
            }
            </CardGrid>
        </Group>
    );
}; 

TimeTable.PropTypes = {
    date:PropTypes.string
};

export default TimeTable;