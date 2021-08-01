import { useEffect, useState, Fragment } from 'react';

import PropTypes from 'prop-types';

import { View, Panel, Group, HorizontalScroll, PanelSpinner, Button} from '@vkontakte/vkui';

import './style.css';

const ScrollDate = ({goDate}) => {
    const [commonDate, setCommonDate] = useState([]);

    useEffect(() => {
        setTimeout(() => {
        setCommonDate([
            {
                id:1,
                date:'10.07.2021',
                active:true
            },
            {
                id:2,
                date:'12.07.2021',
            },
            {
                id:3,
                date:'13.07.2021',
            },
            {
                id:4,
                date:'14.07.2021',
            },
            {
            id:5,
            date:'15.07.2021',
            },
            {
            id:6,
            date:'22.07.2021',
            },
            {
                id:7,
                date:'23.07.2021',
            },
            {
            id:8,
            date:'24.07.2021',
            },
            {
            id:9,
            date:'31.07.2021',
            }
        ]);
        }, 500);
    }, []);

    const goActive = (selectedDate) => {
        let arDate = [...commonDate];

        arDate.forEach(item => {
            if(item.active)
                delete item.active;
            
            if(item.date === selectedDate)
                item.active = true
        });

        setCommonDate(arDate);

        goDate(selectedDate);
    };

    return (
        <View activePanel="horizontal" className="view-container__date">
        <Panel id="horizontal">    
            <Group>
            <HorizontalScroll showArrows getScrollToLeft={i => i - 120} getScrollToRight={i => i + 120}>
                <div style={{ display: 'flex' }}>
                {commonDate.length === 0 && <PanelSpinner />}
                {commonDate.length > 0 &&
                <Fragment>
                    {commonDate.map((item) => {
                    return (
                        <Button className="scroll-date__item" stretched size="l" onClick={() => goActive(item.date)} mode={item.active ? 'commerce' : 'secondary'}  key={item.id}>
                            {item.date}
                        </Button>
                    )
                    })}
                </Fragment>
                }
                </div>
            </HorizontalScroll>
            </Group>
        </Panel>
        </View>
    );
};

ScrollDate.PropTypes = {
    goDate:PropTypes.func.isRequired,
};

export default ScrollDate;