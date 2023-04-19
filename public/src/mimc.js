//const bigInt = require("../BigInteger.min.js");

// The modulus for the snarkjs field.
const __P__ = new bigInt("21888242871839275222246405745257275088548364400416034343698204186575808495617");

function toBigInt(i) {
    if (i instanceof bigInt) {
        return i.value;
    } else {
        return BigInt(i);
    }
}

function mimc_cipher(x_in, k) {
    const c = [
        bigInt("0"),
        bigInt("20888961410941983456478427210666206549300505294776164667214940546594746570981"),
        bigInt("15265126113435022738560151911929040668591755459209400716467504685752745317193"),
        bigInt("8334177627492981984476504167502758309043212251641796197711684499645635709656"),
        bigInt("1374324219480165500871639364801692115397519265181803854177629327624133579404"),
        bigInt("11442588683664344394633565859260176446561886575962616332903193988751292992472"),
        bigInt("2558901189096558760448896669327086721003508630712968559048179091037845349145"),
        bigInt("11189978595292752354820141775598510151189959177917284797737745690127318076389"),
        bigInt("3262966573163560839685415914157855077211340576201936620532175028036746741754"),
        bigInt("17029914891543225301403832095880481731551830725367286980611178737703889171730"),
        bigInt("4614037031668406927330683909387957156531244689520944789503628527855167665518"),
        bigInt("19647356996769918391113967168615123299113119185942498194367262335168397100658"),
        bigInt("5040699236106090655289931820723926657076483236860546282406111821875672148900"),
        bigInt("2632385916954580941368956176626336146806721642583847728103570779270161510514"),
        bigInt("17691411851977575435597871505860208507285462834710151833948561098560743654671"),
        bigInt("11482807709115676646560379017491661435505951727793345550942389701970904563183"),
        bigInt("8360838254132998143349158726141014535383109403565779450210746881879715734773"),
        bigInt("12663821244032248511491386323242575231591777785787269938928497649288048289525"),
        bigInt("3067001377342968891237590775929219083706800062321980129409398033259904188058"),
        bigInt("8536471869378957766675292398190944925664113548202769136103887479787957959589"),
        bigInt("19825444354178182240559170937204690272111734703605805530888940813160705385792"),
        bigInt("16703465144013840124940690347975638755097486902749048533167980887413919317592"),
        bigInt("13061236261277650370863439564453267964462486225679643020432589226741411380501"),
        bigInt("10864774797625152707517901967943775867717907803542223029967000416969007792571"),
        bigInt("10035653564014594269791753415727486340557376923045841607746250017541686319774"),
        bigInt("3446968588058668564420958894889124905706353937375068998436129414772610003289"),
        bigInt("4653317306466493184743870159523234588955994456998076243468148492375236846006"),
        bigInt("8486711143589723036499933521576871883500223198263343024003617825616410932026"),
        bigInt("250710584458582618659378487568129931785810765264752039738223488321597070280"),
        bigInt("2104159799604932521291371026105311735948154964200596636974609406977292675173"),
        bigInt("16313562605837709339799839901240652934758303521543693857533755376563489378839"),
        bigInt("6032365105133504724925793806318578936233045029919447519826248813478479197288"),
        bigInt("14025118133847866722315446277964222215118620050302054655768867040006542798474"),
        bigInt("7400123822125662712777833064081316757896757785777291653271747396958201309118"),
        bigInt("1744432620323851751204287974553233986555641872755053103823939564833813704825"),
        bigInt("8316378125659383262515151597439205374263247719876250938893842106722210729522"),
        bigInt("6739722627047123650704294650168547689199576889424317598327664349670094847386"),
        bigInt("21211457866117465531949733809706514799713333930924902519246949506964470524162"),
        bigInt("13718112532745211817410303291774369209520657938741992779396229864894885156527"),
        bigInt("5264534817993325015357427094323255342713527811596856940387954546330728068658"),
        bigInt("18884137497114307927425084003812022333609937761793387700010402412840002189451"),
        bigInt("5148596049900083984813839872929010525572543381981952060869301611018636120248"),
        bigInt("19799686398774806587970184652860783461860993790013219899147141137827718662674"),
        bigInt("19240878651604412704364448729659032944342952609050243268894572835672205984837"),
        bigInt("10546185249390392695582524554167530669949955276893453512788278945742408153192"),
        bigInt("5507959600969845538113649209272736011390582494851145043668969080335346810411"),
        bigInt("18177751737739153338153217698774510185696788019377850245260475034576050820091"),
        bigInt("19603444733183990109492724100282114612026332366576932662794133334264283907557"),
        bigInt("10548274686824425401349248282213580046351514091431715597441736281987273193140"),
        bigInt("1823201861560942974198127384034483127920205835821334101215923769688644479957"),
        bigInt("11867589662193422187545516240823411225342068709600734253659804646934346124945"),
        bigInt("18718569356736340558616379408444812528964066420519677106145092918482774343613"),
        bigInt("10530777752259630125564678480897857853807637120039176813174150229243735996839"),
        bigInt("20486583726592018813337145844457018474256372770211860618687961310422228379031"),
        bigInt("12690713110714036569415168795200156516217175005650145422920562694422306200486"),
        bigInt("17386427286863519095301372413760745749282643730629659997153085139065756667205"),
        bigInt("2216432659854733047132347621569505613620980842043977268828076165669557467682"),
        bigInt("6309765381643925252238633914530877025934201680691496500372265330505506717193"),
        bigInt("20806323192073945401862788605803131761175139076694468214027227878952047793390"),
        bigInt("4037040458505567977365391535756875199663510397600316887746139396052445718861"),
        bigInt("19948974083684238245321361840704327952464170097132407924861169241740046562673"),
        bigInt("845322671528508199439318170916419179535949348988022948153107378280175750024"),
        bigInt("16222384601744433420585982239113457177459602187868460608565289920306145389382"),
        bigInt("10232118865851112229330353999139005145127746617219324244541194256766741433339"),
        bigInt("6699067738555349409504843460654299019000594109597429103342076743347235369120"),
        bigInt("6220784880752427143725783746407285094967584864656399181815603544365010379208"),
        bigInt("6129250029437675212264306655559561251995722990149771051304736001195288083309"),
        bigInt("10773245783118750721454994239248013870822765715268323522295722350908043393604"),
        bigInt("4490242021765793917495398271905043433053432245571325177153467194570741607167"),
        bigInt("19596995117319480189066041930051006586888908165330319666010398892494684778526"),
        bigInt("837850695495734270707668553360118467905109360511302468085569220634750561083"),
        bigInt("11803922811376367215191737026157445294481406304781326649717082177394185903907"),
        bigInt("10201298324909697255105265958780781450978049256931478989759448189112393506592"),
        bigInt("13564695482314888817576351063608519127702411536552857463682060761575100923924"),
        bigInt("9262808208636973454201420823766139682381973240743541030659775288508921362724"),
        bigInt("173271062536305557219323722062711383294158572562695717740068656098441040230"),
        bigInt("18120430890549410286417591505529104700901943324772175772035648111937818237369"),
        bigInt("20484495168135072493552514219686101965206843697794133766912991150184337935627"),
        bigInt("19155651295705203459475805213866664350848604323501251939850063308319753686505"),
        bigInt("11971299749478202793661982361798418342615500543489781306376058267926437157297"),
        bigInt("18285310723116790056148596536349375622245669010373674803854111592441823052978"),
        bigInt("7069216248902547653615508023941692395371990416048967468982099270925308100727"),
        bigInt("6465151453746412132599596984628739550147379072443683076388208843341824127379"),
        bigInt("16143532858389170960690347742477978826830511669766530042104134302796355145785"),
        bigInt("19362583304414853660976404410208489566967618125972377176980367224623492419647"),
        bigInt("1702213613534733786921602839210290505213503664731919006932367875629005980493"),
        bigInt("10781825404476535814285389902565833897646945212027592373510689209734812292327"),
        bigInt("4212716923652881254737947578600828255798948993302968210248673545442808456151"),
        bigInt("7594017890037021425366623750593200398174488805473151513558919864633711506220"),
        bigInt("18979889247746272055963929241596362599320706910852082477600815822482192194401"),
        bigInt("13602139229813231349386885113156901793661719180900395818909719758150455500533"),
    ];
    var t = x_in;
    for (var i=0; i < 91; i++) {
        t = t.plus(k).plus(c[i]).mod(__P__).modPow(7, __P__);
    }
    return t.plus(k).mod(__P__);
}

function mimc_compression(acc, data) {
    // This is an instantion of the Miyaguchi-Preneel compression mode with the
    // Mimc(x^7) block cipher
    return data.plus(acc).plus(mimc_cipher(data, acc)).mod(__P__);
}

function mimc_hash(inputs, init) {
    // This is a hash function: Merkle-Damgard(Miyaguchi-Preneel(Mimc(x^7)))
    var t = init;
    for (const input of inputs) {
        t = mimc_compression(t, input);
    }
    return t;
}

// Miyaguchi-Preneel MiMC(x^7) applied to two inputs
function mimc2(in0, in1) {
    return toBigInt(mimc_compression(bigInt(in0), bigInt(in1))).toString();
}


