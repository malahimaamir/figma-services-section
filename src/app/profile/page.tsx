import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
export default function Main() {
  return (
    <Grid container className="h-full gap-y-4 md:gap-y-0">
      <Grid size={{ xs: 12, md: 4 }} className="h-[700px]">
        <div className="h-[400px] bg-slate-100 flex justify-center">
          <div className="w-[200px]  h-[200px] rounded-full bg-slate-200 mt-5 sm:w-[150px] sm:h-[150px] lg:w-[250px] lg:h-[250px] flex flex-col justify-center items-center gap-2">
            <div className="text-[120px] xs:text-[80px] xs:pt-20  lg:text-[140px] font-semibold">
              S
            </div>
            <Button variant="outlined" size="small">
              + Add
            </Button>
            <div className=" sm:text-[25px] font-sans font-bold">
              Swan Gouse
            </div>
            <Button variant="contained" size="medium">
              😊 Child Care
            </Button>
          </div>
        </div>

        <Grid container>
          <Grid className="" size={12}>
            <div className=" bg-slate-100  h-[400px] ">
              <div className=" text-[25px] font-serif text-center ">
                Swan Gouse confirmed info
              </div>
              <div className="text-center mt-2 ">✔ Email address</div>
              <div className="text-center mt-1 ">✔ Phone number</div>
              <div className=" font-serif text-center font-bold mt-2 text-[20px] ">
                Identity Verifications by Carelybay{" "}
              </div>
              <div className="mt-3 flex justify-center items-center r">
                <Button variant="outlined">Get the badge</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={{ xs: 12, md: 8 }} className="h-full">
  <div className="h-full bg-slate-100 p-4">
    <div className="text-[25px] font-semibold">Your profile</div>
    <div className="mt-2">
      This information you share will be used across platform to help other
      people get to know you. Learn more
    </div>
    <Grid container spacing={1} className="mt-4 flex-wrap">
      <Grid size={{ xs: 6, sm: 3, md: 2 }} className="flex items-center justify-center">
        <button className="text-[#FF6817] font-semibold">Personal info</button>
      </Grid>
      <Grid size={{ xs: 6, sm: 3, md: 3 }} className="flex items-center justify-center">
        <button>Services & Experience</button>
      </Grid>
      <Grid size={{ xs: 6, sm: 3, md: 3 }} className="flex items-center justify-center">
        <button>Availability & Rates</button>
      </Grid>
      <Grid size={{ xs: 6, sm: 3, md: 2 }} className="flex items-center justify-center">
        <button>Documents</button>
      </Grid>
    </Grid>
  </div>
</Grid>

    </Grid>
  );
}
