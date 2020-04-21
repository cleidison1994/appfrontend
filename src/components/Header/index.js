import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '~/assets/fastfeetlogo.png';
import { Container, Content } from './styles';
import history from '~/services/history';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
    history.push('/sessions');
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt="Fastfeet" />
          <Link to="/delivery">ENCOMENDAS</Link>
          <Link to="/deliveryman">ENTREGADORES</Link>
          <Link to="/recipients">DESTINATÁRIOS</Link>
          <Link to="/problems">PROBLEMAS</Link>
        </nav>
        <aside>
          <span>{user.name}</span>
          <button type="button" onClick={handleSignOut}>
            Sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
