import Image from '../Image';

export const COLUMNS_PRODUCTS = [
  {
    Header: 'Id',
    accessor: '_id',
  },
  {
    Header: 'Image',
    accessor: 'images',
    Cell: ({ value }) => (
      <Image
        src={value.filter((image) => image.type === 'primary')[0].url}
        alt="hello"
        width={80}
        height={80}
      />
    ),
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Category',
    accessor: 'category',
  },
  {
    Header: 'Stocks',
    accessor: 'stocks',
    Cell: ({ value }) => {
      value = value.map(({ _id, ...other }) => other);
      return (
        <table className=" table-fixed text-base text-gray-900">
          <thead className="p-2">
            <tr className="border-dashed border border-green-500">
              {Object.keys(value[0]).map((item) => (
                <th className="p-2 border-dashed border border-green-500">{item}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {value.map((item) => (
              <tr className="border-dashed border border-green-500">
                {Object.entries(item).map(([_, value]) => (
                  <td className=" border-dashed border border-green-500">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    },
  },
  {
    Header: 'Visibility Status',
    accessor: 'visibilityStatus',
    Cell: ({ value }) => (value ? 'Published' : 'Hidden'),
  },
  {
    Header: 'Discount',
    accessor: 'discount',
    Cell: ({ value }) => `${value}%`,
  },
];
