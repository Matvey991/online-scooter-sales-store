import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../../../shared/ui/Button/Button';
import cls from './BasketEmpty.module.css'
import { RoutePath } from '../../../../components/routerConfig/routerConfig';
import { memo } from 'react';

const BasketEmpty = memo(() => {
return (
    <form className={cls.BasketEmpty}>
      <div className={cls.BasketEmptyContainer}>
      <div className={cls.image}>
        <img alt='fdaf' src='./Empty/Image.svg'/>
      </div>
    <div className={cls.BasketEmptyContent}>
      <h1>ВАША КОРЗИНА ПУСТА</h1>
      <p>Добавьте в нее товары</p>
      <div className={cls.BasletBtn}>
      <Link to={RoutePath.main}>
      <Button size={ButtonSize.SIZE_L} >Перейти в каталог</Button>
      </Link>
      </div>
      </div>
      </div>
</form>
);
});

export default BasketEmpty