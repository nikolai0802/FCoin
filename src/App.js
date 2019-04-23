import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

class Example extends React.Component {

  constructor () {
    this.state = {
      activePanel: 'brand'
    }
  }

  render () {

    return (
      <View activePanel={this.state.activePanel}>
        <Panel id="brand">
          <PanelHeader>
            Настройки
          </PanelHeader>
          <Group>
            <CellButton onClick={() => this.setState({ activePanel: 'light' })}>Альтернативная тема</CellButton>
          </Group>
        </Panel>
        <Panel id="light">
          <PanelHeader
            theme="light"
            left={<HeaderButton onClick={() => this.setState({ activePanel: 'brand' })}>{osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
            addon={<HeaderButton onClick={() => this.setState({ activePanel: 'brand' })}>Назад</HeaderButton>}
          >
            Котики
          </PanelHeader>
        </Panel>
      </View>
    )
  }
}

<Example />
