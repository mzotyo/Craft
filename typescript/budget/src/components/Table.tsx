import React from 'react';

interface TableProps<T> {
	columns: Column<T>[];
	items: T[];
}

export const withTable =
	<T,>(): React.FC<TableProps<T>> =>
	({ columns, items }) =>
		(
			<>
				<table>
					<thead>
						<tr>
							{columns.map((column, index) => (
								<th key={index}>{column.name}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{items.map((rowItem, index) =>
							React.createElement(withRow<T>(index), {
								columns,
								rowItem,
							})
						)}
					</tbody>
				</table>
			</>
		);

interface RowProps<T> {
	columns: Column<T>[];
	rowItem: T;
}

const withRow =
	<T,>(index: number): React.FC<RowProps<T>> =>
	({ columns, rowItem }) =>
		(
			<tr key={index}>
				{columns.map((column, index) => (
					<td key={index}>{column.selector(rowItem)}</td>
				))}
			</tr>
		);

type Column<T> = { name: string; selector: (rowItem: T) => string };
