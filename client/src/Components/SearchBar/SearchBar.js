export default function SearchBar(props) {
  const handleSearchChange = (e) => {
    let query = e.currentTarget.value;
    props.getInfo(query.toLowerCase());
  };

  return (
    <div>
      <div className="mt-20 mb-8 mx-12 relative flex items-center border-2 border-indigo-500 rounded-lg">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Buscar..."
          onChange={(e) => handleSearchChange(e)}
          className="p-6 h-12 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 block w-full sm:text-sm border-indigo-500 rounded-md"
        />
      </div>
    </div>
  );
}
