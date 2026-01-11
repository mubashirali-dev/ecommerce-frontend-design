import flag1 from "../assets/flags/flag1.png";
import flag2 from "../assets/flags/flag2.png";
import flag3 from "../assets/flags/flag3.png";
import flag4 from "../assets/flags/flag4.png";
import flag5 from "../assets/flags/flag5.png";
import flag6 from "../assets/flags/flag6.png";
import flag7 from "../assets/flags/flag7.png";
import flag8 from "../assets/flags/flag8.png";
import flag9 from "../assets/flags/flag9.png";

const CountrySection = () => {
  const countries = [
    {
      id: 1,
      flag: flag1,
      name: "Arabic Emirates",
      url: "shopname.ae",
    },
    {
      id: 2,
      flag: flag2,
      name: "Australia",
      url: "shopname.ae",
    },
    {
      id: 3,
      flag: flag3,
      name: "United States",
      url: "shopname.ae",
    },
    {
      id: 4,
      flag: flag4,
      name: "Russia",
      url: "shopname.ru",
    },
    {
      id: 5,
      flag: flag5,
      name: "Italy",
      url: "shopname.it",
    },
    {
      id: 6,
      flag: flag6,
      name: "Denmark",
      url: "denmark.com.dk",
    },
    {
      id: 7,
      flag: flag7,
      name: "France",
      url: "shopname.com.fr",
    },
    {
      id: 8,
      flag: flag1,
      name: "Arabic Emirates",
      url: "shopname.ae",
    },
    {
      id: 9,
      flag: flag8,
      name: "China",
      url: "shopname.ae",
    },
    {
      id: 10,
      flag: flag9,
      name: "Great Britain",
      url: "shopname.co.uk",
    },
  ];

  return (
    <div className="w-full pt-6">
      <div className="w-[80%] mx-auto">
        <h2 className="pb-6 text-3xl font-semibold">Suppliers by region</h2>
        <div className="grid grid-cols-5 gap-5">
          {countries.map((country, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <img src={country.flag} alt="" />
              </div>
              <div className="pb-2">
                <p className="text-lg">{country.name}</p>
                <p className="text-gray-400 leading-2">{country.url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountrySection;
