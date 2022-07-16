// В Array.prototype добавить свойство с названием heroesRender в значении которого находится функция.
// Даная функция может вызываться в контексте любого массива 
// и в качестве входящего аргумента принимает название папки ('dc', 'marvel'), с которой будут подтягиваться иконки супер-героев этого массива. 
// Пример:
// dcHeroes.heroesRender('dc');
// marvelHeroes.heroesRender('marvel');
// Функция возвращает таблицу, в которой выводится информация по каждому из вложенных объектов. 

// debugger;

let marvelHeroes = [
	{name: "Thor"},
	{name: "Spider Man"},
];

let dcHeroes = [
	{name: "Superman"},
	{name: "Batman"},
	{name: "Deadpool"},
];


Array.prototype.heroesRender = function (folder) {

	let trs = this.map(
		function(heroes) {
			return (`
				<tr>
					<td>${heroes.name}</td>
					<td>
						<img src="images/${folder}/${heroes.name.toLowerCase().replaceAll(" ", "")}.svg">
					</td>
				</tr>
			`);
		}
	)

	.join("")

	document.write(` 
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Icon</th>
				</tr>
			</thead>
			<tbody>
				${trs}
			</tbody>
		</table>
	`);
};

marvelHeroes.heroesRender("marvel");
dcHeroes.heroesRender("dc");