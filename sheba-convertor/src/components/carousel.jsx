import React, {useState} from "react";
import {TiChevronLeftOutline, TiChevronRightOutline} from "react-icons/ti";
// import './style.css';

const Carousel = ({children}) => {
    const MAX_VISIBILITY = 3;
    const [active, setActive] = useState(1);
    const count = React.Children.count(children);

    return (
        <div className="carousel mt-5">
            {active > 0 && (
                <button className="nav left" onClick={() => setActive(i => i - 1)}>
                    <TiChevronLeftOutline/>
                </button>
            )}
            {React.Children.map(children, (child, i) => (
                <div
                    className="card-container"
                    style={{
                        '--active': i === active ? 1 : 0,
                        '--offset': (active - i) / 3,
                        '--direction': Math.sign(active - i),
                        '--abs-offset': Math.abs(active - i) / 3,
                        'pointerEvents': active === i ? 'auto' : 'none',
                        'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                        'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                    }}
                >
                    {child}
                </div>
            ))}
            {active < count - 1 && (
                <button className="nav right" onClick={() => setActive(i => i + 1)}>
                    <TiChevronRightOutline/>
                </button>
            )}
        </div>
    );
};
export default Carousel;