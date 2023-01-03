export interface Todo {
	id: string
	text: string
	complete: boolean
}

export interface Todos {
	[key: string]: Todo
}
