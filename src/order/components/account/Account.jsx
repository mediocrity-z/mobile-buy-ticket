import React, { memo, useMemo, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './Account.css';
import URI from 'urijs';

const Account = memo(function Account(props) {
    const { length } = props;

    const queries = URI.parseQuery(window.location.search);
    const {priceMsg} = queries

    const [expanded, setExpanded] = useState(false);

    const url = useMemo(() => {
        if (priceMsg === 0) {
            return alert('请氪金')
        }
        return new URI('submit.html').toString()
    }, [])

    return (
        <div className="account">
            <div
                className={classnames('price', { expanded })}
                onClick={() => setExpanded(!expanded)}
            >
                <div className="money">{length * priceMsg}</div>
                <div className="amount">支付金额</div>
            </div>
            <a href={url} className="button">提交</a>
            <div
                className={classnames('layer', { hidden: !expanded })}
                onClick={() => setExpanded(false)}
            ></div>
            <div className={classnames('detail', { hidden: !expanded })}>
                <div className="title">金额详情</div>
                <ul>
                    <li>
                        <span>火车票</span>
                        <span>￥{priceMsg}</span>
                        <span>&#xD7;{length}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
});

Account.propTypes = {
    price: PropTypes.number,
    length: PropTypes.number.isRequired,
};

export default Account;
