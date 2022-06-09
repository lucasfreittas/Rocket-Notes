import { FiPlus, FiSearch } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'


export function Home(){
    return(
        <Container>
            <Brand>
                <h1>RockeNotes</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Todos" isActive/></li>
               <li><ButtonText title="React"/></li>
                <li><ButtonText title="NodeJs"/></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas Notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            {id: '1', name:'React'},
                            {id: '2', name:'RocketSeat'},
                        ]
                    }}
                />
                </Section>
            </Content>

            <NewNote>
                <FiPlus/>
                Criar nota
            </NewNote>
        </Container>
    )
};