import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";

export default function Main() {
  return (
    <Grid container className="h-full gap-y-4 md:gap-y-0">
      <Grid size={{ xs: 12, md: 4 }} className="h-[700px]">
        <div className="h-[400px] bg-slate-100 flex justify-center">
          <div className="w-[200px] h-[200px] rounded-full bg-slate-200 mt-5 sm:w-[150px] sm:h-[150px] lg:w-[250px] lg:h-[250px] flex flex-col justify-center items-center gap-2">
            <div className="text-[120px] xs:text-[80px] xs:pt-20 lg:text-[140px] font-semibold">
              S
            </div>
            <Button variant="outlined" size="small">
              + Add
            </Button>
            <div className="sm:text-[25px] font-sans font-bold">
              Swan Gouse
            </div>
            <Button variant="contained" size="medium">
              😊 Child Care
            </Button>
          </div>
        </div>

        <Grid container>
          <Grid size={12}>
            <div className="bg-slate-100 h-[340px]">
              <div className="text-[25px] font-serif text-center">
                Swan Gouse confirmed info
              </div>
              <div className="text-center mt-2">✔ Email address</div>
              <div className="text-center mt-1">✔ Phone number</div>
              <div className="font-serif text-center font-bold mt-2 text-[20px]">
                Identity Verifications by Carelybay
              </div>
              <div className="mt-3 flex justify-center items-center">
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
            This information you share will be used across platform to help
            other people get to know you. Learn more
          </div>
          <Grid container spacing={1} className="mt-4 flex-wrap">
            <Grid size={{ xs: 6, sm: 3, md: 2 }} className="flex items-center justify-center">
              <button className="text-[#FF6817] font-semibold">
                Personal info
              </button>
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

        <Grid container className="gap-2 h-full bg-slate-100 p-4">
          <Grid size={12}>
            <div className="w-full h-[30px]">Profile Bio</div>
          </Grid>
          <Grid size={12}>
            <div className="w-full h-[50px]">
              Write something punchy ex: Experienced and Caring Nanny for
              Infants and Toddlers...
              <div className="font-semibold underline hover:cursor-pointer">
                Add Intro
              </div>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <div className="shadow-md mt-10 w-full h-[50px]">Where I live</div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <div className="shadow-lg mt-10 w-full h-[50px]">Languages</div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <div className="shadow-lg mt-2 w-full h-[50px]">
              Date of the Birth
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <div className="shadow-lg mt-2 w-full h-[50px]">Qualification</div>
          </Grid>

          <Grid size={12}>
            <div className="w-full h-[50px] mt-2 text-[25px] font-serif font-bold">
              Services & Experience
            </div>
            <div className="mt-1">What kind of child carer are you?</div>
            <div className="mt-2">
              <Button variant="contained">Babysitter</Button>
            </div>
          </Grid>

          <Grid size={12}>
            <div className="font-semibold mt-2">Add your Services provided</div>
            <div className="text-[12px]">Skills Ex: Cooking/Meal preparation</div>
            <Grid container>
              <Grid size={1}>
                <div className="mt-3">
                  <Fab size="small" aria-label="add">
                    ➕
                  </Fab>
                </div>
              </Grid>
              <Grid size={1}>
                <div className="mt-3">
                  <Fab size="small" aria-label="add">
                    ➕
                  </Fab>
                </div>
              </Grid>
              <Grid size={1}>
                <div className="mt-3">
                  <Fab size="small" aria-label="add">
                    ➕
                  </Fab>
                </div>
              </Grid>
            </Grid>

            <Grid size={12}>
              <div className="font-semibold mt-2">
                I am comfortable caring for children aged *
              </div>
              <div className="text-[12px]">Ex: “Newborn · up to 12 months”</div>
              <div className="mt-5">
                <Button variant="contained">Additional information</Button>
              </div>
            </Grid>

            
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
