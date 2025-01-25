<template>
  <div>
    <div class="text-center animate__animated animate__zoomIn text-center blue--text heading">
      <p>{{ "Red Flags when Buying Land" }}</p>
    </div>
    <v-row class="no-gutters">
      <v-col class="col-12 col-md-8 offset-md-2 px-2">
        Buying land is currently all the hype -  many people are in the pursuit to purchase land.
        This trend is informed by the many benefits that owning land has, some of these benefits are discussed in our other blogs here.
        Scammers and fraudsters have also taken note of this trend are keen to reap where they did not sow.
        This has seen land-buying related scamming schemes rise, with some being of unimaginable scales such like the one run by Gakuyo Real Estate worth over 1.5billion KES
        and the more recent one of Lesedi Developers which conned unsuspecting land buyers upwards of a billion shillings.
        There are ways to ensure that you do not become part of these statistics.
        The following are some of the red flags that should help you to spot land scams and tips on how to avoid them:
      </v-col>
      <v-col class="col-12 col-md-4 offset-md-4 px-2 d-flex justify-center">
        <v-img
          class="rounded lighten-4"
          :src="require(`@/assets/blogs/redflag.jpeg`)"
        />
      </v-col>
      <v-col class="col-12 col-md-8 offset-md-2 px-2">
        <p class="sub-heading blue--text mt-2">
          {{ "Fake clients during Land Viewing." }}
        </p>
      </v-col>
      <v-col class="col-12 col-md-8 offset-md-2 px-2">
        Most sellers, in most cases, consider reaping from the economies of scale when taking potential clients for land viewing.
        This means that more often than not, you will be taken to view the land with a couple of other potential customers.
        Here, some land scammers do some social engineering to entice you to buy the land;
        they bring some actors to play the role of other potential land buyers to create a false sense of legitimacy and urgency.
        You should therefore engage with the other potential customers in conversations and should anything they say sound suspicious then follow your gut,
        be suspicious.
      </v-col>
      <v-col class="col-12 col-md-8 offset-md-2 px-2">
        <p class="sub-heading blue--text mt-2">
          {{ "Inconsistent information on Ads." }}
        </p>
      </v-col>
      <v-col class="col-12 col-md-8 offset-md-2 px-2">
        Most land selling companies use multiple channels to get to potential customers.
        Therefore, before committing to buying the land, ensure that you go through all their marketing material to verify that they contain the same information on them.
        Should this information differ then that should serve as a red flag.
        When you meet with the buyer and what they say is contrary to what was stated in their marketing materials, then that should serve as a red flag as well.
        Even worse is when they cannot verify their credentials and proper documentation.
        For instance, they cannot provide you with their website, social media profiles or offices.
        If it is a private seller, then insist on seeing their identification documents.
        If you are uncomfortable with a deal, ensure you employ the services of a lawyer and independent surveyor.
      </v-col>
      <v-col class="col-12 col-md-8 offset-md-2 px-2">
        <p class="sub-heading blue--text mt-2">
          {{ "Paying to Personal Accounts." }}
        </p>
      </v-col>
      <v-col class="col-12 col-md-8 offset-md-2 px-2">
        Suppose all the red flags listed above did not surface in your deal and you have confirmed all the relevant details about the land and you are satisfied,
        now it is the part for you to make payment. Very well! However, now the seller wants you pay to their personal account.
        That is a red flag.
        A credible private seller will give you the details of the land owner to pay for the land,
        this is to shelter you should anything happen to the intermediary, upon which it would be very difficult for you to prove that you paid.
        If you are working with a real-estate company then they should give you the details of their bank to pay, not an individual account.
        <span class="pl-4">
          So, if you are a first-time land buyer, here are some tips to mitigate the risk of you falling for a con game:
        </span>
        <ul>
          <li>If you are unsure of anything, seek professional advice from a lawyer and land surveyor. </li>
          <li>Do not pay for anything that you have not seen. </li>
          <li>Always visit the land you are to buy before paying.</li>
          <li>If you are buying through an intermediary, make payments to the owner and if through a real-estate company, pay to their official bank account. </li>
          <li>Always do a land search before buying. </li>
          <li>Lastly, listen to your gut. </li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'RedFlagsWhenBuyingLand',
  head () {
    return {
      title: 'Red Flags when Buying Land'
    }
  }
}
</script>
