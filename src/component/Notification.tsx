import React from 'react';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Notification = () => {
  const notification = useAppSelector((state) => state.notification);
  const dispatch = useDispatch();
  console.log('dispatch:: ', dispatch);

  React.useEffect(() => {
    console.log('notification useEffect ', notification);
  }, [notification]);
  return (
    <>
      {notification && notification.type ? (
        <div className="ant-message">
          <div>
            <div className="ant-message-notice">
              <div className="ant-message-notice-content">
                <div className="ant-message-custom-content ant-message-success">
                  <span role="img" aria-label="check-circle" className="anticon anticon-close-circle">
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="check-circle"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                  </span>
                  <span>Successfully Added to Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Notification;
