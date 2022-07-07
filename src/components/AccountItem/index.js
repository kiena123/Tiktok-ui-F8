import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
//
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={
                    'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7b8f4837351012d823a82b77ae90efe1~c5_100x100.jpeg?x-expires=1657357200&x-signature=wcaKnIeN3wK9pA%2FPC%2FAj3Yc4dY0%3D'
                }
                alt={''}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}
export default AccountItem;
