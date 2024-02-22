import { LINKS } from '@/settings/config';
import { Context } from '@/settings/constant';
import { CommaStringToList } from 'lesca-comma-string';
import { Fragment, memo, useContext, useMemo } from 'react';
import './aside.less';

const Aside = memo(() => {
  const [context] = useContext(Context);

  const contacts = useMemo(() => {
    const contacts = context.ready?.contacts;
    if (contacts) {
      const list = CommaStringToList(contacts, ['email', 'name']);
      if (list) {
        return list.map((item) => (
          <a key={item.email} href={`mailto:${item.email}`}>
            {item.name}
          </a>
        ));
      }
      return [];
    }
    return [];
  }, [context.ready?.contacts]);

  return (
    <div className='Aside'>
      <div className='grid'>
        <div />
      </div>
      <div className='contact'>
        <div>
          <button
            onClick={() => {
              window.open(LINKS.facebook, '_blank');
            }}
            className='fb'
          ></button>
          <button
            className='ig'
            onClick={() => {
              window.open(LINKS.instagram, '_blank');
            }}
          ></button>
        </div>
        <div>
          <span>Contact us</span>
          <br />
          {contacts.map((item, index) => {
            if (index !== contacts.length - 1)
              return (
                <Fragment key={`item${index}`}>
                  {item}
                  <br />
                </Fragment>
              );
            return <Fragment key={`item${index}`}>{item}</Fragment>;
          })}
          <br />
          <a target='_blank' href='tel:0277451688'>
            +886 2 77451688
          </a>
        </div>
        <div>
          <span>Ogilvy Taiwan</span>
          <br />
          <a target='_blank' href='https://maps.app.goo.gl/4qyPLyeNVAjjRxox8'>
            3F 89 Song Ren Rd
            <br />
            Taipei 110, Taiwan
          </a>
        </div>
      </div>
    </div>
  );
});
export default Aside;
