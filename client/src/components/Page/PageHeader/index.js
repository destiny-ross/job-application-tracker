import Button from "../../Button";

const PageHeader = ({ title, location, displaySearch }) => {
  return (
    <header className="Page-header">
      <h1>{title || null}</h1>
      {displaySearch && (
        <section>
          <input />
          <Button text="Search" />
        </section>
      )}
    </header>
  );
};
PageHeader.defaultProps = {
  displaySearch: true,
};
export default PageHeader;
