import { v4 } from "uuid";

const Toolbar = ({filters, selected, onSelectFilter}) => {
    return (
        <div className="toolbar">
            {['All', ...filters].map((filter) => (
                <button key={v4} className={
                    filter === selected ? 'toolbar__btn-selected' : 'toolbar__btn'}
                    onClick={() => onSelectFilter(filter)}
                >{filter}</button>
                ))
            }
            </div>
    )
}

export default Toolbar;

