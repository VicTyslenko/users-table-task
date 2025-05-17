export type HeaderProps = {
  searchValue: string;
  handleSearch: (value: string) => void;
};

export enum FilterOptions {
  ADMIN = "Admin",
  USER = "User",
  PRIVATE = "Private Directory",
  FAVOURITES = "Favourites",
  ALL = "All contacts",
}
