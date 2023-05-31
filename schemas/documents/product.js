export default {
	title: 'Product',
	name: 'product',
	type: 'document',
	fields: [
		{
			title: 'Images',
			name: 'images',
			type: 'image',
		},
		{
			title: 'Name',
			name: 'name',
			type: 'string',
		},
		{
			title: 'Price',
			name: 'price',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name'
			}
		},
		
	]
}