import React from 'react'
import { Div, Input} from './style'


export function SecaoComentario(props) {
	return (
		<Div>
			<Input
				placeholder={'Comentário'}
				value={props.valor}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</Div>
	)
}