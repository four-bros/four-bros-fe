import { Icon } from 'semantic-ui-react'

export const handleCaretIcon = (condition: boolean) => {
    const icon = condition ? <Icon name='caret up' size='small' /> : <Icon name='caret down' size='small' />;
    return icon;
}
