export type CompanyType = {
  name: string;
  description: CompanyDescriptionType;
  url: string;
  logo: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  _id: string;
};

export type CompanyDescriptionType = {
  [key: number]: {
    children: {
      text: string;
      _key: string;
    }[];
    style: string;
    _key: string;
    _type: string;
  };
};
