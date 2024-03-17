import data from "/services/specialities.json";

export function getSpecialities() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...data.specialities]);
    }, 3000);
  });
}
