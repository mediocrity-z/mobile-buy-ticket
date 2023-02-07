import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Ticket.css';
import URI from 'urijs';

const Ticket = memo(function Ticket(props) {
    const { type } = props;
    window.console.log(props);

    const queries = URI.parseQuery(window.location.search);
    const {priceMsg} = queries
    
    return (
        <div className="ticket">
            <p>
                <span className="ticket-type">{type}</span>
                <span className="ticket-price">{priceMsg}</span>
            </p>
            <div className="label">坐席</div>
        </div>
    );
});

Ticket.propTypes = {
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Ticket;
