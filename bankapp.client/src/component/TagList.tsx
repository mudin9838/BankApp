import { ITag } from "./Tag.type";

type Pros={
  list:ITag
}
const TagList = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 1</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 2</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 3</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">Data 1</td>
        <td className="px-6 py-4 whitespace-nowrap">Data 2</td>
        <td className="px-6 py-4 whitespace-nowrap">Data 3</td>
      </tr>
    </tbody>
  </table>
  );
};

export default TagList;
