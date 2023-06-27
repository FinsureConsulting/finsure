I ran a script from ChatGPT to remove whitespace from as many SVG files as I could automatically.
You can use a version of this too, one at a time.
You'll want to install `svgcleaner`, and then you can open the run prompt and try this:

```shell
svgcleaner "C:\path\to\your\file.svg" "C:\path\to\your\file_cleaned.svg" --multipass
```

Of course use the real filename instead of `C:\path\to\your\file.svg`.
And this makes a new file alongside the original file,
so if it works, just delete the original and rename the new one to the old name.

My script managed 59 files with no trouble:

filepath | result
-------- | ------
/images/ams/novidea.svg | 49.95% smaller
/images/billing-software/cogitate.svg | 32.42% smaller
/images/billing-software/DCT.svg | 34.61% smaller
/images/billing-software/epay.svg | 42.26% smaller
/images/billing-software/guidewire.svg | 33.31% smaller
/images/billing-software/majesco.svg | 32.23% smaller
/images/capacity/gallagher-re.svg | 0.04% smaller
/images/capacity/lloyds.svg | 49.94% smaller
/images/capacity/markel.svg | 49.90% smaller
/images/capacity/sirius-point.svg | 49.90% smaller
/images/events/5o-insurtech-conference.svg | 50.00% smaller
/images/events/Commercial Lines Innovation USA (1).svg | 49.97% smaller
/images/events/digital-insurance-summit.svg | 49.97% smaller
/images/events/digital-transformation-insurance-conference-2023.svg | 49.97% smaller
/images/events/future-of-insurance-usa-2023.svg | 49.99% smaller
/images/events/global-insurance-symposium.svg | 49.95% smaller
/images/events/global-insurtech-summit-2023.svg | 49.99% smaller
/images/events/Insurance Conference Greece (1).svg | 50.00% smaller
/images/events/Insurance Innovators Nordic (2).svg | 49.96% smaller
/images/events/insurance-ai-innovative-tech-usa-2023.svg | 50.00% smaller
/images/events/insurance-data-science-conference.svg | 49.99% smaller
/images/events/insurance-innovators-fraud-and-claims.svg | 49.97% smaller
/images/events/insurance-innovators-nordics.svg | 49.96% smaller
/images/events/insurance-innovators.svg | 49.99% smaller
/images/events/insurtech-connect-asia.svg | 49.99% smaller
/images/events/IT DIA Europe (2).svg | 49.99% smaller
/images/events/itc-dia-europe.svg | 49.99% smaller
/images/events/Women in insurtech (1).svg | 49.99% smaller
/images/policy-software/mga-systems.svg | 49.91% smaller
/images/policy-software/sapiens.svg | 49.97% smaller
/images/29.TrustLayer-Logo.svg | 48.57% smaller
/images/30.feesible_logo.svg | 25.41% smaller
/images/error-404.svg | 11.91% smaller
/images/event-suggest.svg | 0.02% smaller
/images/fronting-logo-AIG.svg | 35.82% smaller
/images/fronting-logo-Allianz.svg | 51.54% smaller
/images/fronting-logo-AXA.svg | 53.05% smaller
/images/fronting-logo-Chubb-Limited.svg | 58.39% smaller
/images/fronting-logo-ClearBlue.svg | 49.99% smaller
/images/fronting-logo-Comerica_Inc.svg | 17.43% smaller
/images/fronting-logo-Munichre.svg | 49.54% smaller
/images/fronting-logo-Spinnaker.svg | 98.46% smaller
/images/fronting-logo-SwissRe.svg | 22.80% smaller
/images/fronting-logo-Zurich.svg | 6.46% smaller
/images/logo-01.svg | 2.67% smaller
/images/logo-02.svg | 23.67% smaller
/images/logo-03.svg | 9.13% smaller
/images/logo-18.svg | 8.58% smaller
/images/logo-23.svg | 3.84% smaller
/images/logo-33.svg | 7.15% smaller
/images/logo-35.svg | 10.72% smaller
/images/logo-36.svg | 13.75% smaller
/images/logo-41.svg | 1.64% smaller
/images/logo-43.svg | 1.13% smaller
/images/logo-46.svg | 9.29% smaller
/images/logo-47.svg | 9.66% smaller
/images/logo-48.svg | 7.24% smaller
/images/logo-51.svg | 7.63% smaller
/images/logo.svg | 12.32% smaller

Unfortunately there were another 103 files it did not manage to trim automatically, including most of the article logos.
I'll walk you through how to troubleshoot these below.

filename | error row and column
-------- | --------------------
/images/ams/ams-360.svg | error at 1:8517.
/images/ams/applied.svg | error at 1:6518.
/images/ams/better-agency.svg | error at 1:9942.
/images/ams/bind-hq.svg | error at 1:28677.
/images/ams/glovebox.svg | error at 1:8887.
/images/ams/HAWKSOFT.svg | error at 1:14016.
/images/ams/insuredmine.svg | error at 1:11398.
/images/ams/nexsure.svg | error at 1:33401.
/images/ams/veruna.svg | error at 1:63675.
/images/billing-software/diesta.svg | error at 1:39075.
/images/billing-software/functionalfinance.svg | error at 1:3590.
/images/billing-software/insurity.svg | error at 1:17598.
/images/capacity/accelerant.svg | error at 1:8581.
/images/capacity/asia-capital-re.svg | error at 1:9276.
/images/capacity/everest.svg | error at 1:16932.
/images/capacity/gen-re.svg | error at 1:31003.
/images/capacity/grinnell.svg | error at 1:33144.
/images/capacity/guy-carpenter.svg | error at 1:23375.
/images/capacity/lockton-re.svg | error at 1:91087.
/images/capacity/munich-re.svg | error at 1:68302.
/images/capacity/qbe-re.svg | error at 1:6963.
/images/capacity/starr.svg | error at 1:19350.
/images/capacity/swiss-re.svg | error at 1:18964.
/images/capacity/tokio-marine-hcc.svg | error at 1:62138.
/images/capacity/transverse.svg | error at 1:58917.
/images/capacity/wrberkeley.svg | error at 1:12571.
/images/crm/better-agency.svg | error at 1:9942.
/images/crm/bitrix.svg | error at 1:15591.
/images/crm/fresh-sale.svg | error at 1:21982.
/images/crm/freshworks.svg | error at 1:42371.
/images/crm/hubspot.svg | error at 1:54200.
/images/crm/keap.svg | error at 1:53473.
/images/crm/pipedrive.svg | error at 1:44024.
/images/crm/salesforce.svg | error at 1:68237.
/images/crm/zendesk.svg | error at 1:7427.
/images/crm/zoho.svg | error at 1:48825.
/images/data/cape.svg | error at 1:139119.
/images/data/crunchbase.svg | error at 1:5161.
/images/data/experian.svg | error at 1:94912.
/images/data/fenris.svg | error at 1:74331.
/images/data/miliman.svg | error at 1:14994.
/images/data/octo.svg | error at 1:10973.
/images/data/planck.svg | error at 1:29233.
/images/data/verisk.svg | error at 1:12551.
/images/data/zesty.svg | error at 1:89519.
/images/events/Cyber Risk _ Insurance Innovation (1).svg | error at 1:437888.
/images/events/dig-in-conference-2023.svg | error at 1:728045.
/images/events/Insurance Innovators Munich_.svg | error at 1:84929.
/images/events/insurance-innovators-munich.svg | error at 1:84929.
/images/events/insurance-innovators-summit.svg | error at 1:493168.
/images/events/insure-nxt.svg | error at 1:367715.
/images/events/insuretek.svg | error at 1:1076598.
/images/events/Insurtech Saudi Arabia (1).svg | error at 1:1076598.
/images/events/InsurTech Summit Australia.svg | error at 1:23744.
/images/events/insurtech-connect.svg | error at 1:7541411.
/images/events/insurtech-hartford-symposium.svg | error at 1:2818.
/images/events/insurtech-insights-nyc.svg | error at 1:302528.
/images/events/insurtech-live-2023.svg | error at 1:4707.
/images/events/itc-lat-am.svg | error at 1:618.
/images/events/life-insurance-conference-2023.svg | error at 1:1910460.
/images/events/March Spring Conference 2023 (1).svg | error at 1:618185.
/images/events/namic-annual-convention-128.svg | error at 1:777953.
/images/events/namic-management-conference.svg | error at 1:2779432.
/images/events/On Ramp Insurance X Gener8tor Conference.svg | error at 1:829934.
/images/events/singapore-fintech-festival.svg | error at 1:614.
/images/events/The new international congress and expo (1).svg | error at 1:367715.
/images/events/Women in Insurance Summit (1).svg | error at 1:1225026.
/images/events/WSIA Insurtech Conference (1).svg | error at 1:1378910.
/images/fronting-logo-aon_whiterock.svg | error at 1:2777.
/images/fronting-logo-fallslake.svg | error at 1:194738.
/images/fronting-logo-obsidian.svg | error at 1:16028.
/images/fronting-logo-statenational.svg | error at 1:11441.
/images/fronting-logo-trisura.svg | error at 1:229666.
/images/payment/agave.svg | error at 1:7351.
/images/payment/e-pay-policy.svg | error at 1:13343.
/images/payment/functional-finance.svg | error at 1:3426.
/images/payment/payment-us.svg | error at 1:23141.
/images/payment/stripe.svg | error at 1:18561.
/images/policy-software/evari.svg | error at 1:18647.
/images/policy-software/insly.svg | error at 1:87717.
/images/policy-software/instanda.svg | error at 1:18689.
/images/policy-software/joshu.svg | error at 1:11776.
/images/policy-software/oneshield.svg | error at 1:22908.
/images/policy-software/origami-risk.svg | error at 1:15791.
/images/policy-software/policyfly.svg | error at 1:10850.
/images/policy-software/protosure.svg | error at 1:18598.
/images/policy-software/socotra.svg | error at 1:113377.
/images/policy-software/solartis.svg | error at 1:421621.
/images/policy-software/surefyre.svg | error at 1:9627.
/images/premium-finance/agile.svg | error at 1:14971.
/images/premium-finance/ascend.svg | error at 1:21947.
/images/premium-finance/capital-premium-finance.svg | error at 1:32631.
/images/premium-finance/first-insurance.svg | error at 1:31195.
/images/premium-finance/honor-capital.svg | error at 1:17433.
/images/premium-finance/honor-final.svg | error at 1:13583.
/images/premium-finance/honor.svg | error at 1:13410.
/images/premium-finance/ipfs.svg | error at 1:17199.
/images/11.workforce_insurance_logo.svg | error at 1:77032.
/images/27.pathpoint_logo.svg | error at 1:41278.
/images/28.Agribusiness_Logo.svg | error at 1:47311.
/images/31.Edge Case Research.svg | error at 1:99556.
/images/32.safely_logo.svg | error at 1:113630.
/images/33.Blackfoot hills credit union.svg | error at 1:13630.

**Here is now to fix them. I can't guarantee this always works, but it worked for me for the Novidea logo.**

- Upload the file to https://validator.w3.org/#validate_by_upload
- You'll get an error message like "Bad value `70976fb7c0` for attribute id on SVG element filter: Not a valid XML 1.0 name."
- Open your text editor and replace `70976fb7c0` everywhere with `_70976fb7c0`.
  The only thing that makes that ID invalid is that it starts with a number.
  Starting with an underscore is OK.
- Then rerun the utility as described above, and see if it works!

These 2 files actually came out larger than normal, in case we want to change them back:

```
/images/logo-45.svg
/images/logo-38.svg
```

For reference, in case there's something wrong with it, the `/images/error-404.svg` file gave us this warning 44 times:

```
Warning: The 'stop' element must have an 'offset' attribute. Fallback to 'offset=0'.
```